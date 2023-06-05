import React, { useState } from 'react';
import './Profile.scss';
import userAvatar from './user-avatar.jpg';

const Profile = () => {
  const [editableFields, setEditableFields] = useState({
    name: {
      value: 'John Doe',
      
    },
    email: {
      value: 'johndoe@example.com',
      
    },
    address: {
      value: '123 Main St',
      
    },
    phone: {
      value: '555-555-5555',
      
    },
    password: {
      value: '********',
      
    }
  });
  const [image, setImage] = useState(userAvatar);

  const handleDoubleClick = (field) => {
    const updatedEditableFields = {
      ...editableFields,
      [field]: {
        ...editableFields[field],
        isEditable: true
      }
    };
    setEditableFields(updatedEditableFields);
  };

  const handleFieldChange = (event, field) => {
    const updatedEditableFields = {
      ...editableFields,
      [field]: {
        value: event.target.value,
        isEditable: false
      }
    };
    setEditableFields(updatedEditableFields);
  };

  const handleSaveChanges = () => {
    // Handle saving changes to backend
    console.log('Changes saved!');
  };

  return (
    <div className="profile">
        <h1>Profile Informations</h1>
      <div className="profile__header">
        <div className="profile__avatar">
            
          <img src={image} alt="User Avatar" />
          
        </div>
        <div className="profile__details">
          <div className="profile__field">
            <div className="profile__field-label">Nom</div>
            <div className="profile__field-value">
              {editableFields.name ? (
                <input type="text" value={editableFields.name.value} onChange={(event) => handleFieldChange(event, 'name')}  />
              ) : (
                <span onDoubleClick={() => handleDoubleClick('name')}>{editableFields.name.value}</span>
              )}
            </div>
          </div>
          <div className="profile__field">
            <div className="profile__field-label">Email</div>
            <div className="profile__field-value">
              {editableFields.email ? (
                <input type="text" value={editableFields.email.value} onChange={(event) => handleFieldChange(event, 'email')} />
              ) : (
                <span onDoubleClick={() => handleDoubleClick('email')}>{editableFields.email.value}</span>
              )}
            </div>
          </div>
          <div className="profile__field">
            <div className="profile__field-label">Adresse</div>
            <div className="profile__field-value">
              {editableFields.address ? (
                <input type="text" value={editableFields.address.value} onChange={(event) => handleFieldChange(event, 'address')} />
              ) : (
                <span onDoubleClick={() => handleDoubleClick('address')}>{editableFields.address.value}</span>
              )}
            </div>
          </div>
          <div className="profile__field">
            <div className="profile__field-label">Téléphone</div>
            <div className="profile__field-value">
                {editableFields.phone ? (
                  <input type="text" value={editableFields.phone.value} onChange={(event) => handleFieldChange(event, 'phone')} />
                ) : (
                  <span onDoubleClick={() => handleDoubleClick('phone')}>{editableFields.phone.value}</span>
                )}
            </div>
            </div>
            <div className="profile__field">
                <div className="profile__field-label">Mot de passe</div>
                <div className="profile__field-value">
                  {editableFields.password ? (
                    <input type="password" value={editableFields.password.value} onChange={(event) => handleFieldChange(event, 'password')} />
                  ) : (
                    <span onDoubleClick={() => handleDoubleClick('password')}>{editableFields.password.value}</span>
                  )}
    
            </div>
            <button onClick={handleSaveChanges}>Submit</button>
            </div>
            </div>
            </div>
            </div>
            
            );
    }
export default Profile;
