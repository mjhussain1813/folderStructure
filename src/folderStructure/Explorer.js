import React, { useState } from 'react'
import Folder, { explorer } from './Folder'
import './explorer.css'

const Explorer = () => {
const [explorerData,setExplorerData]= useState(explorer)

const handleRename=(id,newName)=>{
    const updateName=(items)=>{
        return items.map((item)=>{
            if(item.id===id){
                return {...item,name:newName};
            }
            if(item.isFolder){
                return {...item,items:updateName(item.items)}
            }
            return item;
        })
    }
    setExplorerData({...explorerData,items:updateName(explorerData.items)})
}
  return (
    <div>
      <Folder  explorer={explorerData} onRename={handleRename}/>
    </div>
  )
}

export default Explorer
