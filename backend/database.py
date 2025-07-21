import os
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("SUPABASE_URL")

def get_db_connection():
    """Get database connection to Supabase Postgres"""
    try:
        conn = psycopg2.connect(DATABASE_URL, cursor_factory=RealDictCursor)
        return conn
    except Exception as e:
        print(f"Database connection error: {e}")
        return None

def create_tables():
    """Create necessary tables if they don't exist"""
    conn = get_db_connection()
    if not conn:
        return False
    
    try:
        cursor = conn.cursor()
        
        # Users table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                first_name VARCHAR(100),
                last_name VARCHAR(100),
                username VARCHAR(100) UNIQUE,
                city VARCHAR(100),
                country VARCHAR(100),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        
        # Deeds table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS deeds (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(id),
                deed_type VARCHAR(100),
                property_address TEXT,
                apn VARCHAR(100),
                county VARCHAR(100),
                legal_description TEXT,
                owner_type TEXT,
                sales_price DECIMAL(15,2),
                grantee_name VARCHAR(255),
                vesting TEXT,
                status VARCHAR(50) DEFAULT 'draft',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        
        # Payment methods table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS payment_methods (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(id),
                stripe_payment_method_id VARCHAR(255),
                card_brand VARCHAR(50),
                last_four VARCHAR(4),
                is_default BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        
        conn.commit()
        cursor.close()
        conn.close()
        return True
    except Exception as e:
        print(f"Error creating tables: {e}")
        return False

# User operations
def create_user(email, first_name, last_name, username=None, city=None, country=None):
    """Create a new user"""
    conn = get_db_connection()
    if not conn:
        return None
    
    try:
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO users (email, first_name, last_name, username, city, country)
            VALUES (%s, %s, %s, %s, %s, %s)
            RETURNING id, email, first_name, last_name, username, city, country, created_at
        """, (email, first_name, last_name, username, city, country))
        
        user = cursor.fetchone()
        conn.commit()
        cursor.close()
        conn.close()
        return dict(user) if user else None
    except Exception as e:
        print(f"Error creating user: {e}")
        return None

def get_user_by_email(email):
    """Get user by email"""
    conn = get_db_connection()
    if not conn:
        return None
    
    try:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
        user = cursor.fetchone()
        cursor.close()
        conn.close()
        return dict(user) if user else None
    except Exception as e:
        print(f"Error getting user: {e}")
        return None

# Deed operations
def create_deed(user_id, deed_data):
    """Create a new deed"""
    conn = get_db_connection()
    if not conn:
        return None
    
    try:
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO deeds (user_id, deed_type, property_address, apn, county, 
                             legal_description, owner_type, sales_price, grantee_name, vesting)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            RETURNING *
        """, (
            user_id, deed_data.get('deed_type'), deed_data.get('property_address'),
            deed_data.get('apn'), deed_data.get('county'), deed_data.get('legal_description'),
            deed_data.get('owner_type'), deed_data.get('sales_price'),
            deed_data.get('grantee_name'), deed_data.get('vesting')
        ))
        
        deed = cursor.fetchone()
        conn.commit()
        cursor.close()
        conn.close()
        return dict(deed) if deed else None
    except Exception as e:
        print(f"Error creating deed: {e}")
        return None

def get_user_deeds(user_id):
    """Get all deeds for a user"""
    conn = get_db_connection()
    if not conn:
        return []
    
    try:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM deeds WHERE user_id = %s ORDER BY created_at DESC", (user_id,))
        deeds = cursor.fetchall()
        cursor.close()
        conn.close()
        return [dict(deed) for deed in deeds]
    except Exception as e:
        print(f"Error getting deeds: {e}")
        return []

# Initialize tables on module import
create_tables() 