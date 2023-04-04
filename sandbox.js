function  create(insertValues){
    const _atributes = {
        body: 'string'
    }
    const insertAttr = Object.entries(_atributes)
    .filter(([attr,domain])=> attr in insertValues)
    .map(([attr])=> attr);

    const insertSchemaStr = insertAttr.map((attr)=>`"${attr}"`).join(',');

    const insertValueString = insertAttr.map(attr => {
        const value = insertValues[attr];
        return typeof value === 'string' ? `'${value}'` : value;
    }).join(',');
    const str = `INSERT INTO ${this._tableName} (${insertSchemaStr})
        VALUES (${insertValueString}) RETURNING *;`
    console.log(str);
    return str
}
create({body: 'hello'});