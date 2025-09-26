# Here are your Instructions

## Local Setup

### Prerequisites
- Ensure you have `Node.js` and `yarn` installed for the frontend.
- Ensure you have `Python 3.8+` and `pip` installed for the backend.

### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn start
   ```

### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Create a `.env` file in the backend directory with the necessary environment variables. Example:
   ```
   MONGO_URL=<your_mongo_url>
   DB_NAME=<your_db_name>
   CORS_ORIGINS=*
   ```
3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the FastAPI server using `uvicorn`:
   ```bash
   uvicorn server:app --reload
   ```

## Deployment to Vercel

### Frontend
1. Ensure your `vercel.json` is configured for a React app.
2. Deploy using Vercel CLI:
   ```bash
   vercel --prod
   ```

### Backend
1. You can deploy the backend to a server or cloud provider that supports FastAPI and MongoDB.
