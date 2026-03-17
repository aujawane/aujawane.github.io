from pydantic import BaseModel

class Contact_Create(BaseModel):
    name : str
    phone : str
    email : str