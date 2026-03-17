from fastapi import FastAPI, HTTPException
from app.schemas import Contact_Create
from typing import Optional

app = FastAPI()

contacts = {1 : {"name" : "Aditya", "phone" : "6197105568", "email" : "aujawane@outlook.com"}}

new_contact_1 = {"name" : "Nate", "phone" : "1234567890", "email" : "dumbass@fuckmail.com"}

@app.post("/create-contact")
def create_contact(contact: Contact_Create):
    new_id = max(contacts.keys()) + 1
    contact = new_contact_1
    contacts[new_id] = contact
    return {"id": contact}



@app.get("/contacts/{id}")
def get_contact_id(id: int):
    if id not in contacts:
        raise HTTPException(status_code = 404, detail = "id not found")
    return contacts.get(id)

@app.get("/contacts")
def get_contacts(name: Optional[str] = None):

    # If no query parameter → return all contacts
    if name is None:
        return contacts

    # Search for matching contacts
    results = [
        contact for contact in contacts.values()
        if name.lower() in contact["name"].lower()
    ]

    # If nothing found
    if not results:
        raise HTTPException(status_code=404, detail="Contact not found")

    return results