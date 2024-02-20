from flask import Flask, render_template, request, jsonify
import json
app = Flask(__name__)

def add_new( data: dict )->None:
  with open("datas.json", "r") as current:
    current_datas = json.loads(current.read())
  with open("datas.json", "w") as new:
    current_datas["courses"].append(data)
    new.write(json.dumps(current_datas))
  

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/addData", methods=["POST", "GET"])
def add_data():
  if request.method == "POST":
    datas = request.get_json()
    add_new(datas)
    return jsonify(datas), 200

if __name__ =='__main__':
  app.run(debug=True)