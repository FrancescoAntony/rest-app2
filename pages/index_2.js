import { useState } from 'react';

export default function Home() {
  const [clients, setClients] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [error, setError] = useState('');

  const handleAddClient = () => {
    if (name.trim() === '') {
      setError('O nome do cliente não pode estar vazio');
      return;
    }
    const newClient = {
      id: Date.now().toString(), // Gerando um ID temporário usando timestamp
      name,
      email,
      phone,
    };
    setClients([...clients, newClient]);
    setName('');
    setEmail('');
    setPhone('');
    setError('');
  };

  const handleEditClient = (id) => {
    const client = clients.find(client => client.id === id);
    setEditId(id);
    setEditName(client.name);
    setEditEmail(client.email);
    setEditPhone(client.phone);
  };

  const handleUpdateClient = () => {
    if (editName.trim() === '') {
      setError('O nome do cliente não pode estar vazio');
      return;
    }
    setClients(clients.map(client => (client.id === editId ? {
      ...client,
      name: editName,
      email: editEmail,
      phone: editPhone,
    } : client)));
    setEditId(null);
    setEditName('');
    setEditEmail('');
    setEditPhone('');
    setError('');
  };

  const handleDeleteClient = (id) => {
    setClients(clients.filter(client => client.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>Clientes</h1>
      <div style={styles.form}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome do Cliente"
          style={styles.input}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={styles.input}
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
          style={styles.input}
        />
        <button onClick={handleAddClient} style={styles.button}>Adicionar Cliente</button>
        {error && <p style={styles.error}>{error}</p>}
      </div>
      <ul style={styles.list}>
        {clients.map(client => (
          <li key={client.id} style={styles.listItem}>
            {client.id === editId ? (
              <div style={styles.form}>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  style={styles.input}
                />
                <input
                  type="text"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  style={styles.input}
                />
                <input
                  type="text"
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                  style={styles.input}
                />
                <button onClick={handleUpdateClient} style={styles.button}>Salvar</button>
                <button onClick={() => setEditId(null)} style={styles.button}>Cancelar</button>
              </div>
            ) : (
              <div>
                <strong>ID:</strong> {client.id}<br />
                <strong>Nome:</strong> {client.name}<br />
                <strong>Email:</strong> {client.email}<br />
                <strong>Telefone:</strong> {client.phone}<br />
                <button onClick={() => handleEditClient(client.id)} style={styles.button}>Editar</button>
                <button onClick={() => handleDeleteClient(client.id)} style={styles.button}>Deletar</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    width: '200px',
  },
  button: {
    padding: '10px 20px',
    margin: '5px',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    marginBottom: '10px',
  },
};