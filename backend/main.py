from flask import Flask, render_template
from flask_socketio import SocketIO, join_room, leave_room
from flask_cors import CORS

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins='*')  # Allow CORS from any origin
CORS(app)
rooms = {}  # Dictionary to store rooms and their members


@socketio.on('join_room')
def handle_join_room(data):
    room_id = data['room_id']
    join_room(room_id)
    if room_id not in rooms:
        rooms[room_id] = []
    print('room joined', room_id)

@socketio.on('leave_room')
def handle_leave_room(data):
    room_id = data['room_id']
    leave_room(room_id)
    rooms[room_id].remove(request.sid)

@socketio.on('send_message')
def handle_send_message(data):
    room_id = data['room_id']
    message = data['message']

if __name__ == '__main__':
    socketio.run(app, debug=True)