// =========================================================================
// MOCK DATABASE & KONSTANTA (dengan penambahan audio_path)
// PASTIKAN SEMUA FILE MP3 INI SUDAH ANDA REKAM DAN ADA DI LOKASI YANG TEPAT!
// =========================================================================
const MOCK_DATABASE = {
    // Data yang dicari setelah ekstraksi RR2
    
    // DATA RR2 CMPV

    "@79200-VT090-C3@CPA@@1@@@": {
        nama: "CPA RR2",         // INI MODEL YANG DI TAMPIL KAN
        model: "CPA RR2 RH", 
        spek: "COVER MATRIAL : KULIT , WARNA COVER : FULL HITAM , FITUR : POWER SEAT , JAHITAN : STICK",
        model_3d_path: "asset/3d model/SEAT RR2 RH CPA.glb",        // INI ADALAH 3D PATH UNTUK KODE YANG ANDA TUNJUKKAN DI GAMBAR
        audio_path: "asset/audio/CPA_RR2_RH.mp3" // Ganti dengan path audio yang benar
    },
    "@79210-VT090-C3@CPA@@1@@@": {
        nama: "CPA RR2",
        model: "CPA RR2 LH", 
        spek: "COVER MATRIAL : KULIT , WARNA COVER : FULL HITAM , FITUR : POWER SEAT , JAHITAN : STICK",
        model_3d_path: "asset/3d model/SEAT RR1 RH CRSD.glb",
        audio_path: "asset/audio/CPA_RR2_LH.mp3"
    },
    "@79200-VT080-C3@CAC@@1@@@": {
        nama: "CAC RR2",
        model: "CAC RR2 RH", 
        spek: "Febric mid (BLACK) HEADREST CTR : ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/MEJA.glb", 
        audio_path: "asset/audio/CAC_RR2_RH.mp3"
    },
    "@79200-010KP-16@C8ALD@@1@@@": {
        nama: "C8ALD RR2",
        model: "C8ALD RR2 RH", 
        spek: "KULIT (DK CHESNUT) HEADREST CTR : ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_RH.mp3" 
    },
    "@79210-010KP-16@C8ALD@@1@@@": {
        nama: "C8ALD RR2",
        model: "C8ALD RR2 LH", 
        spek: "KULIT (DK CHESNUT) HEADREST CTR : TIDAK ADA SEAR BELT WARNING : ADA",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },

    // DATA RR1 CMPV


    // DATA FRON CMPV

    
        "@71100-VT080-E4@CRSD@@1@@@": {
        nama: "FRON CRSD RH ",
        model: "FRON CRSD RH", 
        spek: "FEBRIC LOW (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAR BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/3d model/SEAT FRON RH CPA.glb",
        audio_path: "asset/audio/CRSD_FRON_RH.mp3"
    },
        "@71200-VT070-E4@CRSD@@1@@@": {
        nama: "FRON CRSD LH",
        model: "FRON CRSD LH", 
        spek: "FEBRIC LOW (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : ADA -SEAR BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/3d model/SEAT FRON RH CPA.glb",
        audio_path: "asset/audio/CRSD_FRON_LH.mp3"
    },
        "@71100-VT290-E6@CAHD@@1@@@": {
        nama: "FRON CAHD RH",
        model: "FRON CAHD RH", 
        spek: "FEBRIC MID (DK CHESNUT), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAR BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT270-C7@CAHD@@1@@@": {
        nama: "FRON CAHD LH",
        model: "FRON CAHD LH", 
        spek: "FEBRIC MID (DK CHESNUT), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAR BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT280-E4@CHLD@@1@@@": {
        nama: "FRON CHLD RH",
        model: "FRON CHLD RH", 
        spek: "FEBRIC LOW (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT240-E4@CHLD@@1@@@": {
        nama: "FRON CHLD LH",
        model: "FRON CHLD LH", 
        spek: "FEBRIC LOW (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT330-E4@CALD@@1@@@": {
        nama: "FRON CALD RH",
        model: "FRON CALD RH", 
        spek: "FEBRIC LOW (DK CHESNUT), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT300-E4@CALD@@1@@@": {
        nama: "FRON CALD RH",
        model: "FRON CALD RH", 
        spek: "FEBRIC LOW (DK CHESNUT), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT280-C4@CHL@@1@@@": {
        nama: "FRON CHL RH",
        model: "FRON CHL RH", 
        spek: "FEBRIC LOW (BLACK), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT240-C4@CHL@@1@@@": {
        nama: "FRON CHL LH",
        model: "FRON CHL LH", 
        spek: "FEBRIC LOW (BLACK), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT320-C4@CAL@@1@@@": {
        nama: "FRON CAL RH",
        model: "FRON CAL RH", 
        spek: "FEBRIC LOW (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT300-C4@CAL@@1@@@": {
        nama: "FRON CAL LH",
        model: "FRON CAL LH", 
        spek: "FEBRIC LOW (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT190-C6@CPA@@1@@@": {
        nama: "FRON CPA RH",
        model: "FRON CPA RH", 
        spek: "PU (BLACK), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK   ADA ",
        model_3d_path: "asset/3d model/SEAT FRON RH CPA.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT170-C6@CPA@@1@@@": {
        nama: "FRON CPA LH",
        model: "FRON CPA LH", 
        spek: "PU (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/3d model/SEAT FRON RH CPA.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT220-E5@CLCD@@1@@@": {
        nama: "FRON CLCD RH",
        model: "FRON CLCD RH", 
        spek: "FEBRIC LOW (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
       "@71200-VT200-E5@CLCD@@1@@@": {
        nama: "FRON CLCD LH",
        model: "FRON CLCD LH", 
        spek: "FEBRIC LOW (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT230-E5@CACD@@1@@@": {
        nama: "FRON CACD RH",
        model: "FRON CACD RH", 
        spek: "FEBRIC MID (DK CHESNUT), -AIR BAG :  ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT210-E5@CACD@@1@@@": {
        nama: "FRON CACD LH",
        model: "FRON CACD LH", 
        spek: "FEBRIC MID (DK CHESNUT), -AIR BAG :  ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT200-E5@CSCD@@1@@@": {
        nama: "FRON CSCD RH",
        model: "FRON CSCD RH", 
        spek: "FEBRIC LOW (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT180-E4@CSCD@@1@@@": {
        nama: "FRON CSCD LH",
        model: "FRON CSCD LH", 
        spek: "FEBRIC LOW (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT230-E5@CSCD@@1@@@": {
        nama: "FRON CASD RH",
        model: "FRON CASD RH", 
        spek: "FEBRIC MID (DK CHESNUT), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },         
        "@71200-VT231-E5@CSCD@@1@@@": {
        nama: "FRON CASD LH",
        model: "FRON CASD LH", 
        spek: "FEBRIC MID (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT110-E5@CRD@@1@@@": {
        nama: "FRON CRD RH",
        model: "FRON CRD RH", 
        spek: "FEBRIC MID (DK CHESNUT), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
       "@71200-VT110-E5@CRD@@1@@@": {
        nama: "FRON CRD LH",
        model: "FRON CRD LH", 
        spek: "FEBRIC MID (DK CHESNUT), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },   
        "@71100-VT580-E0@CRAD@@1@@@": {
        nama: "FRON CRAD RH",
        model: "FRON CRAD RH", 
        spek: "FEBRIC MID (DK CHESNUT), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
       "@71200-VT110-E0@CRAD@@1@@@": {
        nama: "FRON CRAD LH",
        model: "FRON CRAD LH", 
        spek: "FEBRIC MID (DK CHESNUT), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT310-C8@CARC@@1@@@": {
        nama: "FRON CARC RH",
        model: "FRON CARC RH", 
        spek: "PU (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
       "@71200-VT170-C8@CARC@@1@@@": {
        nama: "FRON CARC LH",
        model: "FRON CARC LH", 
        spek: "PU (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    }, 
        "@71100-VT310-C5@CRC@@1@@@": {
        nama: "FRON CRC RH",
        model: "FRON CRC RH", 
        spek: "PU (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
       "@71200-VT290-C5@CRC@@1@@@": {
        nama: "FRON CRC LH",
        model: "FRON CRC LH", 
        spek: "PU (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT160-C4@C8S@@1@@@": {
        nama: "FRON C8S RH",
        model: "FRON C8S RH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
       "@71200-VT160-C4@C8S@@1@@@": {
        nama: "FRON C8S LH",
        model: "FRON C8S LH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
       "@71100-VT230-C5@CAS@@1@@@": {
        nama: "FRON CAS RH",
        model: "FRON CAS RH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT210-C5@CAS@@1@@@": {
        nama: "FRON CAS LH",
        model: "FRON CAS LH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
       "@71100-VT230-C3@C8C@@1@@@": {
        nama: "FRON C8C RH",
        model: "FRON C8C RH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT110-C5@C8C@@1@@@": {
        nama: "FRON C8C LH",
        model: "FRON C8C LH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT130-C5@CRA@@1@@@": {
        nama: "FRON CRA RH",
        model: "FRON CRA RH", 
        spek: "PU (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
       "@71200-VT110-C5@CAR@@1@@@": {
        nama: "FRON CAR LH",
        model: "FRON CAR LH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },

        "@71100-VT320-C6@C8H@@1@@@": {
        nama: "FRON C8H RH",
        model: "FRON C8H RH", 
        spek: "PU (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT220-C3@C8H@@1@@@": {
        nama: "FRON C8H LH",
        model: "FRON C8H LH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT290-C7@CLH@@1@@@": {
        nama: "FRON CLH RH",
        model: "FRON CLH RH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT270-C7@CLH@@1@@@": {
        nama: "FRON CLH LH",
        model: "FRON CLH LH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT290-C7@CAH@@1@@@": {
        nama: "FRON CAH RH",
        model: "FRON CAH RH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT270-C7@CAH@@1@@@": {
        nama: "FRON CAH LH",
        model: "FRON CAH LH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT190-E5@CPAD@@1@@@": {
        nama: "FRON CPAD RH",
        model: "FRON CPAD RH", 
        spek: "PU (DL CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT170-E5@CPAD@@1@@@": {
        nama: "FRON CPAD LH",
        model: "FRON CPAD LH", 
        spek: "PU (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT310-E0@CARCD@@1@@@": {
        nama: "FRON CARCD RH",
        model: "FRON CARCD RH", 
        spek: "PU (DK CHESNUT), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT170-E0@CARCD@@1@@@": {
        nama: "FRON CARCD LH",
        model: "FRON CARCD LH", 
        spek: "PU (DK CHESNUT), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT310-E0@CRCD@@1@@@": {
        nama: "FRON CRCD RH",
        model: "FRON CRCD RH", 
        spek: "PU (DK CHESNUT), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT290-E0@CRCD@@1@@@": {
        nama: "FRON CRCD LH",
        model: "FRON CRCD LH", 
        spek: "PU (DK CHESNUT), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT220-C5@CLC@@1@@@": {
        nama: "FRON CLC RH",
        model: "FRON CLC RH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT200-C5@CLC@@1@@@": {
        nama: "FRON CLC LH",
        model: "FRON CLC LH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT230-C5@CAC@@1@@@": {
        nama: "FRON CAC RH",
        model: "FRON CAC RH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT210-C5@CAC@@1@@@": {
        nama: "FRON CAC LH",
        model: "FRON CAC LH", 
        spek: "FEBRIC MID (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },     
        "@71100-VT200-C4@CSC@@1@@@": {
        nama: "FRON CSC RH",
        model: "FRON CSC RH", 
        spek: "FEBRIC LOW (BLACK), -AIR BAG : ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT160-C4@CSC@@1@@@": {
        nama: "FRON CSC LH",
        model: "FRON CSC LH", 
        spek: "FEBRIC LOW (BLACK), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT140-E4@CSHD@@1@@@": {
        nama: "FRON CSHD RH",
        model: "FRON CSHD RH", 
        spek: "FEBRIC LOW (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
       "@71200-VT120-E4@CSHD@@1@@@": {
        nama: "FRON CSHD LH",
        model: "FRON CSHD LH", 
        spek: "FEBRIC LOW (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-VT160-E4@CHD@@1@@@": {
        nama: "FRON CHD RH",
        model: "FRON CHD RH", 
        spek: "FEBRIC LOW (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71200-VT140-E4@CHD@@1@@@": {
        nama: "FRON CHD LH",
        model: "FRON CHD LH", 
        spek: "FEBRIC LOW (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-010KP.12@C8ALD@@1@@@": {
        nama: "FRON C8ALD RH",
        model: "FRON C8ALD RH", 
        spek: "PU (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : TIDAK ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : ADA, -SHOPING HOOK : ADA -SEAT BELT WARNING CUSION : ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },
        "@71100-020KP.12@C8ALD@@1@@@": {
        nama: "FRON C8ALD LH",
        model: "FRON C8ALD LH", 
        spek: "PU (DK CHESNUT), -AIR BAG : TIDAK ADA, -SEAT ADJUSTER {P8} : ADA, -SEAT ADJUSTER {M6} : TIDAK ADA, -SEAT ADJUSTER {M4} : TIDAK ADA, -SHOPING HOOK : TIDAK ADA -SEAT BELT WARNING CUSION : TIDAK ADA ",
        model_3d_path: "asset/SEAT RR2 C8ALD.glb",
        audio_path: "asset/audio/C8ALD_RR2_LH.mp3"
    },


};
// --------------------------------------------------------

const PENANDA_LIST = [
    // (Daftar PENANDA_LIST Anda)
        
    // DATA RR2 CMPV

    "@79210-VT090-C3@CPA@@1@@@", 
    "@79200-VT090-C3@CPA@@1@@@",
  
    // DATA RR1 CMPV

    // DATA FRON CMPV


];
// --------------------------------------------------------
// =========================================================================
// FUNGSI BARU: MEMUTAR AUDIO DARI FILE MP3
// =========================================================================

/**
 * Memainkan file audio dari path yang ditentukan.
 */
function playAudio(path) {
    // 1. Hentikan dan hapus audio sebelumnya yang mungkin sedang diputar
    const existingAudio = document.getElementById('tts-audio');
    if (existingAudio) {
        existingAudio.pause();
        existingAudio.remove();
    }
    
    // 2. Buat dan mainkan objek Audio baru
    const audio = new Audio(path);
    audio.id = 'tts-audio';
    
    // Browser sering memblokir autoplay. Gunakan .play() dengan penanganan error.
    audio.play()
         .catch(error => {
             console.warn("Gagal memutar audio secara otomatis. Pastikan user telah berinteraksi dengan halaman.");
             // Pesan ini hanya muncul di console, pengguna harus menekan tombol 'Dengarkan Keterangan Audio'
         });
}

// =========================================================================
// FUNGSI UTAMA (MODIFIKASI)
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mengambil parameter pencarian dari URL (query string)
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const query = urlParams.get('query');

    if (type && query) {
        fetchItemDetails(type, query);
    } else {
        displayError("Tidak ada ID atau Model yang dimasukkan.");
    }

    // 2. Setup listener untuk tombol 'Dengarkan Keterangan Audio'
    const speakButton = document.getElementById('speak-button');
    if (speakButton) {
        speakButton.addEventListener('click', () => {
            // Kita ambil ID yang terakhir kali berhasil ditampilkan
            const displayedId = document.getElementById('display-id').textContent;
            
            // Cari data item berdasarkan ID yang ditampilkan
            const itemData = MOCK_DATABASE[displayedId]; 
            
            if (itemData && itemData.audio_path) {
                // Mainkan audio file saat tombol diklik
                playAudio(itemData.audio_path);
            }
        });
    }
});


/**
 * Mengambil data barang berdasarkan tipe (qrcode/model) dan query.
 */
function fetchItemDetails(type, query) {
    const loadingStatusEl = document.getElementById('loading-status');
    if (loadingStatusEl) loadingStatusEl.style.display = 'block';
    
    let itemData = null;
    let displayId = query;
    
    if (type === 'qrcode') {
        const kode_lengkap = query;
        let kode_sebagian_ditemukan = false;

        for (const penanda of PENANDA_LIST) {
            const posisi_awal = kode_lengkap.indexOf(penanda);

            if (posisi_awal !== -1) {
                const kode_sebagian = kode_lengkap.substring(posisi_awal);
                displayId = kode_sebagian; 
                itemData = MOCK_DATABASE[kode_sebagian];
                kode_sebagian_ditemukan = true;
                break; 
            }
        }

        if (!kode_sebagian_ditemukan && !itemData) {
              itemData = MOCK_DATABASE[kode_lengkap];
        }

    } else if (type === 'model') {
        for (const key in MOCK_DATABASE) {
            if (MOCK_DATABASE[key].model === query) {
                itemData = MOCK_DATABASE[key];
                displayId = key;
                break;
            }
        }
    }

    // Simulasi penundaan 500ms
    setTimeout(() => {
        if (loadingStatusEl) loadingStatusEl.style.display = 'none';

        if (itemData) {
            displayItem(itemData, displayId);
        } else {
            displayError(`"${query}" (${type}) tidak ditemukan dalam database.`);
        }
    }, 500);
}


/**
 * Menampilkan detail barang yang sukses ditemukan dan MENGAKTIFKAN PEMUTARAN AUDIO.
 */
function displayItem(data, displayId) {
    const itemDetailsEl = document.getElementById('item-details');
    if (itemDetailsEl) itemDetailsEl.style.display = 'flex'; // Mengubah display:flex dari 'none'

    // --- 1. SET DATA TEKS ---
    const displayIdEl = document.getElementById('display-id');
    const displayNamaEl = document.getElementById('display-nama');
    const displaySpekEl = document.getElementById('display-spek');

    if (displayIdEl) displayIdEl.textContent = displayId;
    if (displayNamaEl) displayNamaEl.textContent = data.nama;
    if (displaySpekEl) displaySpekEl.textContent = data.spek;
    
    // --- 2. LOGIKA TAMPILAN 3D / FOTO ---
    const modelViewer = document.getElementById('display-3d-model');
    const photoEl = document.getElementById('display-foto'); 

    if (data.model_3d_path) {
        if (modelViewer) {
            modelViewer.setAttribute('src', data.model_3d_path);
            modelViewer.style.display = 'block';
        }
        if (photoEl) photoEl.style.display = 'none';
        
    } else if (data.foto_url) {
        if (modelViewer) modelViewer.style.display = 'none';
        if (photoEl) {
            photoEl.setAttribute('src', data.foto_url);
            photoEl.style.display = 'block';
        }
    } else {
        if (modelViewer) modelViewer.style.display = 'none';
        if (photoEl) photoEl.style.display = 'none';
    }

    // --- 3. AKTIVASI SUARA OTOMATIS DARI FILE MP3 ---
    if (data.audio_path) {
        playAudio(data.audio_path);
    }
}


/**
 * Menampilkan pesan error jika barang tidak ditemukan.
 */
function displayError(message) {
    const itemDetailsEl = document.getElementById('item-details');
    if (itemDetailsEl) itemDetailsEl.style.display = 'flex';
    
    const modelViewer = document.getElementById('display-3d-model');
    const photoEl = document.getElementById('display-foto'); 

    if (modelViewer) modelViewer.style.display = 'none';
    if (photoEl) photoEl.style.display = 'none';

    const displayIdEl = document.getElementById('display-id');
    const displayNamaEl = document.getElementById('display-nama');
    const displaySpekEl = document.getElementById('display-spek');

    if (displayIdEl) displayIdEl.textContent = '—';
    if (displayNamaEl) displayNamaEl.textContent = 'BARANG TIDAK DITEMUKAN';
    if (displaySpekEl) displaySpekEl.textContent = message;
}

// Atur waktu tunggu dalam milidetik (1 menit = 60000 milidetik)
const autoRedirectTime = 60000; 

// Fungsi untuk mengarahkan kembali ke halaman sebelumnya
function autoRedirect() {
    console.log(`Mengalihkan kembali ke index.html setelah ${autoRedirectTime / 1000} detik.`);
    window.location.href = "index.html"; // Mengarahkan ke halaman index.html
}
// Setel timer untuk memanggil fungsi autoRedirect setelah waktu yang ditentukan
const redirectTimer = setTimeout(autoRedirect, autoRedirectTime);