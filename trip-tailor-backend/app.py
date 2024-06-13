from flask import Flask, request, jsonify

app = Flask(__name__)

# API endpoint to receive user travel preferences
@app.route('/get_itinerary', methods=['POST'])