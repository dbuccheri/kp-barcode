import "./App.css";
import { uidData } from "./uidData";
 
 
 
 
const Component = () => {
    const searchParams = new URLSearchParams(document.location.search)
    const par_uid = searchParams.get('UID')
    const getUID = uidData.filter (ID => ID.UID === par_uid )
 
    return (
        <div>
        <div id="header">
        <img src="./public/kplogo.png" width="200px" />
        </div>
        <h1 id="UID">
            Unique Identifier Database
        </h1>
       <div > {getUID.map(data => (
       <div>
       <div id="data" class="parent">
 
       
        <div class="child">
             <span class="label">UID:</span> {data.UID}<br />
             <span class="label">Project:</span>  {data.project}<br />
             <span class="label">Letter ID:</span>  <a href="https://sp-cloud.kp.org/sites/mssa-dms/LT/Forms/AllItems.aspx?FolderCTID=0x012000E13CEA7FFE72EA4BBF3018ECCEA7D61B&View=%7BF5A23DBB%2DFB79%2D47AB%2D87D2%2DB015C162A29E%7D&id=%2Fsites%2Fmssa%2Ddms%2FLT%2FKPMC%2FIntake&viewid=f5a23dbb%2Dfb79%2D47ab%2D87d2%2Db015c162a29e" title="Open BR from INTAKE"> {data.letterID}</a><br />
             <span class="label">OTN/SKU No:</span> <a href={`https:cars.kp.org?SKU=${data.letterID}`} title="Open letter in CARS"> {data.otn_sku}</a><br />
             <span class="label">Region:</span>  {data.region}<br />
             <span class="label">Language:</span>  {data.language}<br />
             <span class="label">Release Date:</span>  {data.release_date}<br />
             <span class="label">Composition Date:</span>  {data.composition_date}<br />
             <span class="label">Revision:</span>  {data.revision}<br />
             <span class="label">Media:</span>  {data.media}<br />
             <span class="label">Printing Vendor:</span>  {data.printing_vendor}<br />
             <span class="label">Test Suite:</span>  {data.test_suite}<br />
             <span class="label">Owner Group:</span>  {data.ownergroup}<br />
             <span class="label">Client:</span>      <a href={`mailto:${data.client}?subject=Letter UID${data.UID}&body=Info requested`} title={`mailto:${data.client}`}> {data.client} </a><br />
             <span class="label">TC Contact:</span>   <a href={`mailto:${data.tc}?subject=Letter UID${data.UID}&body=Info requested`} title={`mailto:${data.tc}`}>{data.tc} </a><br />
             <span class="label">Notes:</span>   {data.notes}<br />
        </div>
       </div>
       </div>
      
      ))}</div>
        </div>
    )
}

export default Component;