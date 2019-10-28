""" Build index from directory listing

make_index.py </path/to/directory> [--header <header text>]
"""

INDEX_TEMPLATE = r"""
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Ignou Incompleted Courses</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="../../css/bootstrap.min.css">
    </head>
    <body>
    	<div class="container">
    		<div class="pb-2 mt-4 mb-2">
    			<h1>IGNOU Previous Exam Papers</h1>
    		</div>
    		<table class="table table-hover">
			    <thead>
			        <tr class="table-primary">
			            <th scope="col">Filename</th>
			        </tr>
			    </thead>
			    <tbody class="subjects">
					% for name in names:
					    <tr>
				            <th scope="row"><a href="${name}">${name}</a></th>
				        </tr>
					% endfor
			    </tbody>
			</table>
		</div>
    </body>
</html>
"""

EXCLUDED = ['index.html']

import os
import argparse

# May need to do "pip install mako"
from mako.template import Template


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("directory")
    parser.add_argument("--header")
    args = parser.parse_args()
    print(args.directory)
    fnames = [fname for fname in sorted(os.listdir(args.directory))
              if fname not in EXCLUDED]
    header = (args.header if args.header else os.path.basename(args.directory))
    data = Template(INDEX_TEMPLATE).render(names=fnames, header=header)
    f = open(args.directory+"/index.html", 'w+')
    f.write(data)
main()