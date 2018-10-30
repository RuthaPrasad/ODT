domain = None

from flask import Flask, request, render_template
app = Flask(__name__)



@app.route('/')
def render_static():
	return render_template("./homepage.html")

# @app.route('/tool/drawing_tool.html/<domain>')
# def tool_domain_extract(domain):
# 	print("\n\n\n\n")
# 	print(domain) 
# 	print("\n\n\n\n")


@app.route('/tool/drawing_tool/<string:domain>')
def tool_domain_extract(domain):
	print("\n\n\n\n")
	print(domain) 
	print("\n\n\n\n")
	return render_template('/tool/drawing_tool.html', domain_name=domain)


# @app.route('/tool/drawing_tool' , methods=['GET'])
# def tool_domain_extract():
# 	temp = request.values.get('domain')
# 	global domain
# 	domain = temp
# 	print("\n\n\n\n")
# 	print(temp) 
# 	print("\n\n\n\n")
# 	return render_template('./tool/drawing_tool.html', domain_name = domain)
# 	# return '''</hi>something</h1>'''

if __name__ == '__main__':
    app.run()
