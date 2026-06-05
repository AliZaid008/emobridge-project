import sqlite3

conn = sqlite3.connect("emobridge.db")
cursor = conn.cursor()

cursor.execute("""
INSERT INTO sessions
(
    child_id,
    start_time,
    end_time,
    dominant_emotion,
    avg_confidence,
    engagement_rate,
    distraction_count
)
VALUES
(
    1,
    '2026-06-01 10:00',
    '2026-06-01 10:15',
    'Happy',
    0.89,
    0.92,
    1
)
""")

conn.commit()
conn.close()

print("Session Added Successfully")