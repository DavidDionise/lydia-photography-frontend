
const submitEmail = props => {
  const { name, email_address, subject, message } = props;
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const body = JSON.stringify({ name, email_address, subject, message });
  const fetch_config = { method: 'POST', headers, body };
  const url = `${API_URL}/receive-message`;

  return fetch(url, fetch_config)
  .then(res => res.json())
  .catch(e => { throw new Error(e) });
}

module.exports = submitEmail;
