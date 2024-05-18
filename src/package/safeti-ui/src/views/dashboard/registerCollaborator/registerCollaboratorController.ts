// CollaboratorController.js

import axios from 'axios';

class CollaboratorController {
    async createCollaborator(name:any, office:any, constructions:any, company:any) {
      try {
        const response = await axios.post('http://localhost:3050/createCollaborator', {
          name: name,
          office: office,
          constructions: constructions,
          company: company
        });
        return response.data
      } catch (error:any) {
        throw error.response.data.error
      }
    }
  }
  
  const collaboratorController = new CollaboratorController()
  
  export {
    collaboratorController
  }
  