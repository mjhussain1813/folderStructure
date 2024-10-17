import React from 'react'
import { useState } from 'react';
import './explorer.css'

export const explorer = {
    id:"1",
    name: "root",
    isFolder: true,
    items: [
      {
        id:"2",
        name: "public",
        isFolder: true,
        items: [
          {
            id:"3",
            name: "public nested 1",
            isFolder: true,
            items: [
              {
                id:"4",
                name: "index.html",
                isFolder: false,
                items: []
              },
              {
                id:"5",
                name: "hello.html",
                isFolder: false,
                items: []
              }
            ]
          },
          {
            id:"6",
            name: "public_nested_file",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id:"7",
        name: "src",
        isFolder: true,
        items: [
          {
            id:"8",
            name: "App.js",
            isFolder: false,
            items: []
          },
          {
            id:"9",
            name: "Index.js",
            isFolder: false,
            items: []
          },
          {
            id:"10",
            name: "styles.css",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id:"11",
        name: "package.json",
        isFolder: false,
        items: []
      }
    ]
  };

  const Folder = ({ explorer, onRename }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(explorer.name);
  
    const toggleFolder = () => setIsExpanded((prev) => !prev);
  
    const handleRenameSubmit = (e) => {
      e.preventDefault();
      setIsEditing(false);
      onRename(explorer.id, newName);
    };
  
    return (
      <div className="folder">
        {isEditing ? (
          <form onSubmit={handleRenameSubmit}>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onBlur={handleRenameSubmit}
              autoFocus
            />
          </form>
        ) : (
          <div className="file-item">
            <div
              onClick={explorer.isFolder ? toggleFolder : null}
              style={{ cursor: explorer.isFolder ? 'pointer' : 'default', fontWeight: explorer.isFolder ? 'bold' : 'normal' }}
            >
              {explorer.name}
            </div>
            <div onClick={() => setIsEditing(true)} className="edit-icon">📝</div>
          </div>
        )}
        {explorer.isFolder && isExpanded && (
          <div style={{ marginLeft: 20 }}>
            {explorer.items.map((item) => (
              <Folder key={item.id} explorer={item} onRename={onRename} />
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Folder;