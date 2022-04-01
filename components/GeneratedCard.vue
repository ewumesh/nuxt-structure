<!-- Generated Card UI added here -->
<template>
<div>
  <v-row no-gutters>
        <v-col cols="12" class="text-center">
            <v-card tile style="background-color:#272640; color: #fff;padding:5px 0">
                <h1>Generate Card</h1>
            </v-card>
        </v-col>
    </v-row>
  <v-row no-gutters style="margin:50px 0">
    <v-col cols="6" v-for="(data, index) in userDetails" :key="index">
      <v-card id="myId" style="height:54mm; width:86mm">
        <v-row no-gutters style="padding:3px 0">
          <v-col cols="3" class="text-center" style="padding-top:10px; padding-left:15px">
            <img height="70" src="@/assets/images/tu-logo.png"/>
          </v-col>
          <v-col cols="9" style="padding-top:10px; color:#0096c7">
            <div style="font-weight:bold; font-size:16pt">{{data.universityInfo.universityName}}</div>
            <div style="font-weight:medium; font-size:13pt">{{data.universityInfo.uDepartment}}</div>
            <div style="font-size:11px; padding-top:2px">{{data.universityInfo.location}}</div>
            <div style="font-size:10px; color:#000">Email: {{data.universityInfo.universityEmail}}, URL: {{data.universityInfo.url}}</div>
            <div style="font-size:10px; color:#000">Phone no:{{data.universityInfo.phoneNo}}</div>
          </v-col>

          <v-col cols="12" style="background-color:#023e8a; color:#fff; padding:2px 0; font-size:12px;" class="text-center">
            <span style="text-transform:uppercase; letter-spacing: 3px;">{{data.cardType}}</span>
          </v-col>
        </v-row>
        
        <v-row no-gutters style="text-align:left; padding:0 10px; font-size:10px;font-family: Arial, Helvetica, sans-serif;">
          <!-- <barcode style=" height:20px; z-index:5555;" v-bind:value="barcodeValue">
              Show this if the rendering fails.
          </barcode> -->
          <v-col cols="10">
            <div>Name: {{data.name}}</div>
            <div style="margin-top:2px !important;">Address: {{data.address}}</div>
            <div style="margin-top:2px !important;">Email: {{data.email}}</div>
            <div style="margin-top:2px !important;">Department: {{data.department}}</div>
            <div style="margin-top:2px !important;">Phone: {{data.phoneNo}}</div>
            <div style="margin-top:2px !important;">Issued On: {{data.issuedDate}}
            <div class="barcode">
              <barcode displayValue="false" style="margin: -28px 0 0 116px; !important;" height="15" width="1" v-bind:value="barcodeValue">
                Show this if the rendering fails.
              </barcode>
            </div>
          </div>
          </v-col>
          <v-col cols="2">
            <img height="65" :src="data.image">
          </v-col>
        </v-row>
      </v-card>
      <v-btn tile @click="generateCard(data)" color="darkPink">Generate Card</v-btn>
    </v-col>
  </v-row>
</div>
</template>

<script>
import html2canvas from "html2canvas";
import VueBarcode from 'vue-barcode';
export default {
  name: 'GeneratedCard',
  components: {
    'barcode': VueBarcode
  },
  props: {
      formData: Object
  },

  data() {
    return {
      barcodeValue: 'test',

      userDetails:[
        {id: 1, universityInfo: {uid: 1122, universityName: "Tribhuwan University", uDepartment: "Central Library", location:"Kirtipur, Kathmandu",universityEmail:"tucl@tucl.org.np", url:"www.tucl.org.np", phoneNo:"+977-1-4331317, 4331318", logo: ""}, cardType: "Student", name:"Umesh Thapa", address: "Kathmandu, Nepal", phoneNo:"+977-9860614339",email:"umeshthapa539@gmail.com",department: "IT", issuedDate: "2022-03-22", image: "https://i.pinimg.com/564x/83/60/f6/8360f6e8e6167d545b0c34de7490cc1e.jpg"},
        {id: 1, universityInfo: {uid: 1122, universityName: "Tribhuwan University", uDepartment: "Central Library", location:"Kirtipur, Kathmandu",universityEmail:"tucl@tucl.org.np", url:"www.tucl.org.np", phoneNo:"+977-1-4331317, 4331318", logo: ""}, cardType: "Student", name:"Umesh Thapa", address: "Kathmandu, Nepal", phoneNo:"+977-9860614339",email:"umeshthapa539@gmail.com",department: "IT", issuedDate: "2022-03-22", image: "https://i.pinimg.com/564x/83/60/f6/8360f6e8e6167d545b0c34de7490cc1e.jpg"}
        ]
    }
  },

  methods: {
    async generateCard(data) {
      console.log("Button clicked");
      const canvas = await html2canvas(
        document.getElementById("myId")
      );
      canvas.style.display = "block";
      document.body.appendChild(canvas);
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      
      const a = document.createElement("a");
      a.setAttribute("download", data.name +`.png`);
      a.setAttribute("href", image);
      a.click();
    },
  }

}
</script>

<style scoped>
.barcode v::deep .vue-barcode-element {
height: 25px !important;
}

</style>