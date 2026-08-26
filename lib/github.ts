export async function fetchRepo(repoUrl:string, token?:string){
  try{
    const m = repoUrl.match(/github.com\/(.+?)\/?$/);
    if(!m) return null;
    const repo = m[1];
    const api = `https://api.github.com/repos/${repo}`;
    const headers: Record<string,string> = { 'Accept':'application/vnd.github.v3+json' };
    if(token) headers['Authorization'] = `token ${token}`;
    const res = await fetch(api, { headers, next: { revalidate: 60*60*4 } });
    if(!res.ok) return null;
    const data = await res.json();
    return {
      url: data.html_url,
      name: data.name,
      description: data.description,
      language: data.language,
      stars: data.stargazers_count,
      updatedAt: data.updated_at
    }
  }catch(e){
    return null;
  }
}
