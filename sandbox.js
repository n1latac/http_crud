function updateByPk (updateObj){


    const _atributes={
        body: 'string'
    }

    const {id,updateValues} = updateObj;
    const insertAttr = Object.entries(_atributes)
    .filter(([attr,domain])=> attr in updateValues)
    .map(([attr])=> attr);
    console.log(insertAttr);


    // const insertValueString = insertAttr.map(attr => {
    //     const value = updateObj[attr];
    //     return typeof value === 'string' ? `'${value}'` : value;
    // }).join(',');
    // const str = `INSERT INTO ${this._tableName} (${insertSchemaStr})
    //     VALUES (${insertValueString}) RETURNING *;`
    // const {rows} =  this._client.query(str);
    // return rows;
}

const r = updateByPk({id: 1, updateValues:{
    body: 'hello',
    created_at: 28
}})
console.log(r);