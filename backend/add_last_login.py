#!/usr/bin/env python3
"""
Add last_login column to users table
"""

import psycopg2
from urllib.parse import urlparse
import sys

def add_last_login_column(database_url):
    """Add last_login column with proper transaction handling"""
    
    print("🔗 Connecting to database...")
    
    try:
        # Parse the database URL
        result = urlparse(database_url)
        
        # Connect to database
        conn = psycopg2.connect(
            database=result.path[1:],
            user=result.username,
            password=result.password,
            host=result.hostname,
            port=result.port
        )
        
        # Set autocommit to avoid transaction issues
        conn.autocommit = True
        cursor = conn.cursor()
        
        print("✅ Connected successfully!")
        
        try:
            print("🔨 Adding last_login column...")
            cursor.execute("ALTER TABLE users ADD COLUMN last_login TIMESTAMP;")
            print("✅ Added last_login column successfully!")
        except psycopg2.errors.DuplicateColumn:
            print("ℹ️ Column last_login already exists")
        except Exception as e:
            print(f"❌ Error adding column: {e}")
        
        cursor.close()
        conn.close()
        
        print("\n🎉 Database update completed!")
        print("✅ Login should now work!")
        
    except Exception as e:
        print(f"❌ Connection Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    print("🔧 Add Last Login Column")
    print("=" * 30)
    
    # Use the known database URL
    database_url = "postgresql://deedpro_user:4MkRMdYMHnnoUwvD03rI3kVfjMLwV6j3@dpg-d208q5umcj7s73as68g0-a.ohio-postgres.render.com/deedpro"
    
    add_last_login_column(database_url) 