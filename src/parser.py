from bs4 import BeautifulSoup
import requests;
html = requests.get("https://www.youmath.it/formulari/65-formulari-di-trigonometria-logaritmi-esponenziali/146-valori-notevoli-delle-funzioni-trigonometriche-tabella.html")
soup = BeautifulSoup(html.text, "html.parser")
tds = soup.find_all("td")
for i in range(1, len(tds), 6):
    soup2 = BeautifulSoup(str(tds[i]), "html.parser")
    imgs = soup2.find_all("img")
    if(len(imgs) != 0):
        print('"' + imgs[0]['alt'].strip("\n") + '"' + ",")

