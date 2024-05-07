Use a node.js base images
from node 
  
copy package.json .

#install dependencies
RUN npm install 

copy . .

#expose the port the app runs on 
EXPOSE 3000

#Command to run the start script
CMD ["npm,"start"] 
