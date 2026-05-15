export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center', 
      padding: '2rem 0', 
      background: 'var(--card-bg)', 
      borderTop: '1px solid var(--border-color)',
      color: 'var(--text-secondary)'
    }}>
      <p>&copy; {new Date().getFullYear()} Abdulrahman Mohamed Fawzy. All Rights Reserved.</p>
    </footer>
  );
}
