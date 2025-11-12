import './ForgotPassword.css';

export default function ForgotPassword() {
  return (
    <div className="forgot-password">
      <h1>Esqueceu sua senha?</h1>
      <p>Digite seu e-mail para redefinir a senha.</p>
      <input type="email" placeholder="Seu e-mail" />
      <button>Enviar link de recuperação</button>
    </div>
  );
}
