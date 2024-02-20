import json

data = {"courses": [{"id": 0, "name": "domak"}]}

# with open("course_datas.json", "w") as course:
#     course.write(json.dumps(data))
def add_new( data: dict )->None:
  with open("datas.json", "r") as current:
    current_datas = json.loads(current.read())
  with open("datas.json", "w") as new:
    current_datas["courses"].append(data)
    new.write(json.dumps(current_datas))
    