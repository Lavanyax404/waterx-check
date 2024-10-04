from flask import Flask, request, jsonify
from chatbot_module import WaterXChatBot  # Ensure this import matches your file structure

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the WaterX ChatBot API! Use the /chat endpoint to interact."

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')
    if not user_message:
        return jsonify({'error': 'No message provided'}), 400

    chatbot = WaterXChatBot(user_message)
    response = chatbot.generate_responses()
    return jsonify({'response': response})

if __name__ == "__main__":
    app.run(debug=True)
