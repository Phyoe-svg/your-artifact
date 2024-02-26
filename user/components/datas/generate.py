import json
with open("datas.json", "r") as datas:
    datas = json.loads(datas.read())
datas = datas["courses"][0]
datas["info"]["course_id"] = int(datas["info"]["course_id"])
id = 0
for lesson_id in datas["lessons"]:
    lesson_id["id"] = id
    lesson_id["course_id"] = int(lesson_id["course_id"])
    id += 1

with open("sub_datas.json", "w") as file:
    file.write(json.dumps(datas))

