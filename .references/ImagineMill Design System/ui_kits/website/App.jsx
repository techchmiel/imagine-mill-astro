// Router for the ImagineMill website UI kit.
function App() {
  const [screen, setScreen] = React.useState('home');
  const nav = (id) => { setScreen(id); window.scrollTo({ top: 0 }); };
  const openArticle = () => nav('article');

  let body;
  if (screen === 'home' || screen === 'articles') body = <HomeScreen onOpen={openArticle} />;
  else if (screen === 'article') body = <ArticleScreen onBack={() => nav('home')} />;
  else if (screen === 'videos') body = <VideosScreen onOpen={openArticle} />;
  else if (screen === 'coaching') body = <CoachingScreen />;

  const headerCurrent = screen === 'article' ? 'articles' : screen;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header current={headerCurrent} onNav={nav} />
      <main style={{ flex: 1 }}>{body}</main>
      <Footer onNav={nav} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
