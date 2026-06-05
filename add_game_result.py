import sqlite3

conn = sqlite3.connect("emobridge.db")
cursor = conn.cursor()

cursor.execute("""
INSERT INTO game_results
(
    session_id,
    score,
    difficulty_level,
    total_attempts,
    success_rate,
    reaction_time
)
VALUES
(
    1,
    85,
    'Medium',
    10,
    80.0,
    2.4
)
""")

conn.commit()
conn.close()

print("Game Result Added Successfully")