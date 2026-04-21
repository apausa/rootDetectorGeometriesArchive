# ROOT Detector Geometries Archive

Archive of FCC Study detector geometries in ROOT, generated from XML files.

## How?

Following the steps in the [tutorial](https://hep-fcc.github.io/fcc-tutorials/main/full-detector-simulations/Visualization/Visualization.html#detector-geometry).

### 1. Sourcing the key4hep stack

```bash
source /cvmfs/sw.hsf.org/key4hep/setup.sh
```

### 2. Defining the output path

```bash
export OUTPUT_PATH="Write your own folder path here"
```

### 3. Downloading the dd4hep2root script

```bash
wget https://fccsw.web.cern.ch/fccsw/tutorials/static/python/dd4hep2root
```

### 4. Making the script executable

```bash
chmod u+x dd4hep2root
```

### 5. Running conversion for all XML files

#### For ALLEGRO

```bash
./dd4hep2root -c $K4GEO/FCCee/ALLEGRO/compact/ALLEGRO_o1_v01/ALLEGRO_o1_v01.xml -o $OUTPUT_PATH/ALLEGRO_o1_v01.root
./dd4hep2root -c $K4GEO/FCCee/ALLEGRO/compact/ALLEGRO_o1_v02/ALLEGRO_o1_v02.xml -o $OUTPUT_PATH/ALLEGRO_o1_v02.root
./dd4hep2root -c $K4GEO/FCCee/ALLEGRO/compact/ALLEGRO_o1_v03/ALLEGRO_o1_v03.xml -o $OUTPUT_PATH/ALLEGRO_o1_v03.root
./dd4hep2root -c $K4GEO/FCCee/ALLEGRO/compact/ALLEGRO_o2_v01/ALLEGRO_o2_v01.xml -o $OUTPUT_PATH/ALLEGRO_o2_v01.root
```

#### For CLD

```bash
./dd4hep2root -c $K4GEO/FCCee/CLD/compact/CLD_o2_v05/CLD_o2_v05.xml -o $OUTPUT_PATH/CLD_o2_v05.root
./dd4hep2root -c $K4GEO/FCCee/CLD/compact/CLD_o2_v06/CLD_o2_v06.xml -o $OUTPUT_PATH/CLD_o2_v06.root
./dd4hep2root -c $K4GEO/FCCee/CLD/compact/CLD_o2_v07/CLD_o2_v07.xml -o $OUTPUT_PATH/CLD_o2_v07.root
./dd4hep2root -c $K4GEO/FCCee/CLD/compact/CLD_o2_v08/CLD_o2_v08.xml -o $OUTPUT_PATH/CLD_o2_v08.root
./dd4hep2root -c $K4GEO/FCCee/CLD/compact/CLD_o3_v01/CLD_o3_v01.xml -o $OUTPUT_PATH/CLD_o3_v01.root
./dd4hep2root -c $K4GEO/FCCee/CLD/compact/CLD_o4_v05/CLD_o4_v05.xml -o $OUTPUT_PATH/CLD_o4_v05.root
```

#### For IDEA

```bash
# ./dd4hep2root -c $K4GEO/FCCee/IDEA/compact/IDEA_o1_v01/IDEA_o1_v01.xml -o $OUTPUT_PATH/IDEA_o1_v01.root # Won't work, check the workarounds subsection
./dd4hep2root -c $K4GEO/FCCee/IDEA/compact/IDEA_o1_v02/IDEA_o1_v02.xml -o $OUTPUT_PATH/IDEA_o1_v02.root
./dd4hep2root -c $K4GEO/FCCee/IDEA/compact/IDEA_o1_v03/IDEA_o1_v03.xml -o $OUTPUT_PATH/IDEA_o1_v03.root
# ./dd4hep2root -c $K4GEO/FCCee/IDEA/compact/IDEA_o2_v01/IDEA_o2_v01.xml -o $OUTPUT_PATH/IDEA_o2_v01.root # Won't work
```

#### ILD_FCCee

```bash
./dd4hep2root -c $K4GEO/FCCee/ILD_FCCee/compact/ILD_FCCee_v01/ILD_FCCee_v01.xml -o $OUTPUT_PATH/ILD_FCCee_v01.root
./dd4hep2root -c $K4GEO/FCCee/ILD_FCCee/compact/ILD_FCCee_v02/ILD_FCCee_v02.xml -o $OUTPUT_PATH/ILD_FCCee_v02.root
```

#### Workarounds

Some XML files need to be modified for the conversion to work.

1. Clone k4geo

```bash
git clone
```

2. Add path

```bash
export LOCAL_K4GEO=
```

3. Modify files

```bash
# FCCee_o2_v04 needs to include detector_types.xml file
sed -i 's|<includes>|<include ref="${DD4hepINSTALL}/DDDetectors/compact/detector_types.xml" />\n  <includes>|' $LOCAL_K4GEO/FCCee/CLD/compact/FCCee_o2_v04/FCCee_o2_v04.xml

# IDEA_o1_v01 needs to include detector_types.xml file
sed -i 's|<includes>|<include ref="${DD4hepINSTALL}/DDDetectors/compact/detector_types.xml" />\n  <includes>|' $LOCAL_K4GEO/FCCee/IDEA/compact/IDEA_o1_v01/IDEA_o1_v01.xml
```

4. Convert files

```bash
./dd4hep2root -c $LOCAL_K4GEO/FCCee/CLD/compact/FCCee_o2_v04/FCCee_o2_v04.xml -o $OUTPUT_PATH/FCCee_o2_v04.root
./dd4hep2root -c $LOCAL_K4GEO/FCCee/IDEA/compact/IDEA_o1_v01/IDEA_o1_v01.xml -o $OUTPUT_PATH/IDEA_o1_v01.root
```
