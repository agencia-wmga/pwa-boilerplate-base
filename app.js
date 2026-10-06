const SUPABASE_URL = 'https://mebyifwvvebqoeumwalf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Mez-tUF51RlB-K1nMbspSg_KCwli1Tw';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('teste-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const msg = document.getElementById('mensagem');
  msg.innerText = 'Enviando...';

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  const { data, error } = await supabaseClient
    .from('teste_pwa')
    .insert([{ nome, email }]);

  if (error) {
    msg.innerText = 'Erro ao enviar: ' + error.message;
  } else {
    msg.innerText = 'Sucesso! Dado gravado no Supabase.';
  }
});
