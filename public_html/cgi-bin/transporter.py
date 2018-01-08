
inven=None
URL=None

import cgi
form=cgi.FieldStorage()
if form.has_key("inventory"):
	inven=form["inventory"]

if form.has_key("URL"):
	URL=form["URL"]

import csv
with open("resources.csv",'rb') as f:
        reader=csv.reader(f)
        row=list(reader)
	status=row[0][2]	

print "Content-Type:text/html\n\n"
if status=='1':
	
	print """
		<html>
		<body>
		<form action=\"%s\" method=\"post\">
			<input type=\"text\" name=\"command\" value=\"REFRESH\">
			<input type=\"hidden\" name=\"inventory\" value=\"%s\">
			<input type=\"submit\">
		</form>
		</body>
		</html>
	"""%(URL,inven)

elif status=='0':

	print """
		<html>
		<body>
		<form action=\"room.cgi\" method=\"post\">
			<input type=\"text\" name=\"command\" value=\"REFRESH\">
                        <input type=\"hidden\" name=\"inventory\" value=\"%s\">
			<input type=\"submit\">
                </form>
		</body>
		</html>
	"""%inven
