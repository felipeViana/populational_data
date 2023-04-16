
var map = L.map("map").setView([-23.2, -45.9], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([-23.2, -45.9]).addTo(map);

var circle = L.circle([-23.22, -45.88], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

var polygon = L.polygon([
  [-23.20827026939924, -45.908432084467613],
  [-23.208268520563383, -45.908440869466112],
  [-23.207731109770791, -45.911773564461015],
  [-23.211305155499108, -45.912443426443865],
  [-23.211232006440916, -45.912933396587448],
  [-23.211022305455412, -45.914383221422874],
  [-23.21081863110058, -45.915661335197676],
  [-23.210665903455382, -45.916854901083759],
  [-23.209282398103401, -45.916621102495547],
  [-23.209024567386749, -45.916607216531851],
  [-23.205731423796067, -45.91610258154396],
  [-23.203303179858263, -45.915664108281369],
  [-23.202510082481641, -45.915550162128504],
  [-23.202012093772797, -45.915376988593444],
  [-23.201805430336911, -45.915242179502904],
  [-23.201263918839334, -45.914838298632048],
  [-23.199785128851286, -45.913633724631858],
  [-23.19891652962858, -45.912889085449407],
  [-23.199655284192211, -45.91215233237056],
  [-23.200046677823092, -45.911694155756493],
  [-23.201209530537124, -45.910335724668982],
  [-23.201479974546054, -45.910107132588045],
  [-23.201976765087792, -45.909520310195148],
  [-23.202469720886107, -45.908949619845629],
  [-23.203278785993824, -45.908009160050476],
  [-23.204305006851204, -45.907005474995778],
  [-23.204467444169879, -45.906805291629318],
  [-23.205190322031562, -45.905912829293797],
  [-23.205572431476831, -45.906314058607798],
  [-23.205667163551748, -45.906425383620906],
  [-23.205861369415484, -45.906627672146662],
  [-23.206045947937685, -45.906845365240798],
  [-23.206737378846018, -45.907387664834445],
  [-23.207295589642289, -45.907771672358734],
  [-23.208261910526844, -45.908424935389213],
  [-23.20827026939924, -45.908432084467613],
]).addTo(map);

polygon.bindPopup("Jd. Colinas, setor: Aquarius, zona: Oeste");