import { connect } from "../database";

export const getTasks = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.execute("select * from excel");
  res.json(rows);
};

export const saveTask = async (req, res) => {
  try {
    const connection = await connect();
    const [results] = await connection.execute(
      "INSERT INTO tasks(title, description) VALUES (?, ?)",
      [req.body.title, req.body.description]
    );

    const newUser = {
      id: results.insertId,
      ...req.body,
    };
    res.json(newUser);
  } catch (error) {
    console.error(error);
  }
};

export const getTask = async (req, res) => {
  const connection = await connect();
  const { id } = req.params; 
  const [rows] = await connection.execute("SELECT MAX(id) as id,MAX(cliente)as cliente,MAX(obra)as obra,MAX(direccion)as direccion,MAX(n_informe) as n_informe, count(n_probeta) as n_probeta,  MAX(n_guia)as n_guia,TRUNCATE(AVG(resistencia),2)as resistencia, MAX(f_emitido) as f_emitido, MAX(f_ingreso)as f_ingreso,   MAX(IF(ensayo ='C','COMPRESION',if(ensayo='P','FLEXOTRACCION',null)))as ensayo,  MAX(IF(ensayo ='C','ASTM C 39 - 96',if(ensayo='P','ASTM C 78 - 94',null)))as norma   FROM `excel` WHERE cliente = ?  OR n_guia = ? GROUP BY n_guia", [id,id]);
  if(rows.length) {
    res.json(rows);
  } else {
    res.json({ message: "La Informacion no esta disponible" });
  }
  
};
export const getInforme = async (req, res) => {
  const connection = await connect();
  const { id } = req.params; 
  const [rows] = await connection.execute("SELECT n_probeta,edad,cod_obra,no_molde,tipo_hormigon,f_vaciado, f_rotura,resistencia FROM `excel` WHERE n_guia = ?", [ id]);
  if(rows.length) {
    res.json(rows);
  } else {
    res.json({ message: "La Informacion no esta disponible" });
  }
  
};

export const deleteTask = async (req, res) => {
  const connection = await connect();
  const result = await connection.execute("DELETE FROM tasks WHERE id = ?", [
    req.params.id,
  ]);
  console.log(result);

  res.sendStatus(204);
};

export const updateTask = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE tasks SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};

export const getTasksCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.execute("SELECT COUNT(*) FROM tasks");
  res.json(rows[0]["COUNT(*)"]);
};
