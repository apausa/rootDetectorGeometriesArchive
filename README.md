# ROOT Detector Geometries Archive

Archive of FCC Study detector geometries: in ROOT, generated from XML files: and glTF, generated from Root files. As well as their configuration files.

## 1. Converting XML to Root

Following the steps in the [tutorial](https://hep-fcc.github.io/fcc-tutorials/main/full-detector-simulations/Visualization/Visualization.html#detector-geometry).

### 1.1. Sourcing the key4hep stack

```bash
source /cvmfs/sw.hsf.org/key4hep/setup.sh

source /cvmfs/sw-nightlies.hsf.org/key4hep/setup.sh

```

### 1.2. Defining the output path

```bash
export OUTPUT_PATH="Write your own folder path here"
```

### 1.3. Downloading the dd4hep2root script

```bash
wget https://fccsw.web.cern.ch/fccsw/tutorials/static/python/dd4hep2root
```

### 1.4. Making the script executable

```bash
chmod u+x dd4hep2root
```

### 1.5. Running conversion for all XML files

#### 1.5.1. For ALLEGRO

```bash
./dd4hep2root -c $K4GEO/FCCee/ALLEGRO/compact/ALLEGRO_o1_v01/ALLEGRO_o1_v01.xml -o $OUTPUT_PATH/ALLEGRO_o1_v01.root
./dd4hep2root -c $K4GEO/FCCee/ALLEGRO/compact/ALLEGRO_o1_v02/ALLEGRO_o1_v02.xml -o $OUTPUT_PATH/ALLEGRO_o1_v02.root
./dd4hep2root -c $K4GEO/FCCee/ALLEGRO/compact/ALLEGRO_o1_v03/ALLEGRO_o1_v03.xml -o $OUTPUT_PATH/ALLEGRO_o1_v03.root
./dd4hep2root -c $K4GEO/FCCee/ALLEGRO/compact/ALLEGRO_o2_v01/ALLEGRO_o2_v01.xml -o $OUTPUT_PATH/ALLEGRO_o2_v01.root
```

#### 1.5.2. For CLD

```bash
./dd4hep2root -c $K4GEO/FCCee/CLD/compact/CLD_o2_v05/CLD_o2_v05.xml -o $OUTPUT_PATH/CLD_o2_v05.root
./dd4hep2root -c $K4GEO/FCCee/CLD/compact/CLD_o2_v06/CLD_o2_v06.xml -o $OUTPUT_PATH/CLD_o2_v06.root
./dd4hep2root -c $K4GEO/FCCee/CLD/compact/CLD_o2_v07/CLD_o2_v07.xml -o $OUTPUT_PATH/CLD_o2_v07.root
./dd4hep2root -c $K4GEO/FCCee/CLD/compact/CLD_o2_v08/CLD_o2_v08.xml -o $OUTPUT_PATH/CLD_o2_v08.root
./dd4hep2root -c $K4GEO/FCCee/CLD/compact/CLD_o3_v01/CLD_o3_v01.xml -o $OUTPUT_PATH/CLD_o3_v01.root
./dd4hep2root -c $K4GEO/FCCee/CLD/compact/CLD_o4_v05/CLD_o4_v05.xml -o $OUTPUT_PATH/CLD_o4_v05.root
```

#### 1.5.3. For IDEA

```bash
./dd4hep2root -c $K4GEO/FCCee/IDEA/compact/IDEA_o1_v01/IDEA_o1_v01.xml -o $OUTPUT_PATH/IDEA_o1_v01.root
./dd4hep2root -c $K4GEO/FCCee/IDEA/compact/IDEA_o1_v02/IDEA_o1_v02.xml -o $OUTPUT_PATH/IDEA_o1_v02.root
./dd4hep2root -c $K4GEO/FCCee/IDEA/compact/IDEA_o1_v03/IDEA_o1_v03.xml -o $OUTPUT_PATH/IDEA_o1_v03.root
./dd4hep2root -c $K4GEO/FCCee/IDEA/compact/IDEA_o1_v04/IDEA_o1_v04.xml -o $OUTPUT_PATH/IDEA_o1_v04.root
./dd4hep2root -c $K4GEO/FCCee/IDEA/compact/IDEA_o2_v01/IDEA_o2_v01.xml -o $OUTPUT_PATH/IDEA_o2_v01.root
```

#### 1.5.4. ILD_FCCee

```bash
./dd4hep2root -c $K4GEO/FCCee/ILD_FCCee/compact/ILD_FCCee_v01/ILD_FCCee_v01.xml -o $OUTPUT_PATH/ILD_FCCee_v01.root
./dd4hep2root -c $K4GEO/FCCee/ILD_FCCee/compact/ILD_FCCee_v02/ILD_FCCee_v02.xml -o $OUTPUT_PATH/ILD_FCCee_v02.root
```
