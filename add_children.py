import sqlite3

conn = sqlite3.connect("emobridge.db")
cursor = conn.cursor()

cursor.execute("""
INSERT INTO children
(name, age, avatar, preferred_theme)
VALUES
('Ahmed', 8, 'Robot Friend', 'Blue')
""")

conn.commit()
conn.close()

print("Child Added Successfully")