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
export OUTPUT="Write your own folder path here"
export K4GEO="Write local k4geo repository path here"
```

### 1.3. Downloading the dd4hep2root script

```bash
wget https://raw.githubusercontent.com/key4hep/k4geo/main/utils/dd4hep2root.py
```

### 1.4. Making the script executable

```bash
chmod u+x dd4hep2root.py
```

### 1.5. Running conversion for all XML files

#### 1.5.1. For ALLEGRO

```bash
./dd4hep2root.py -c $K4GEO/FCCee/ALLEGRO/compact/ALLEGRO_o1_v01/ALLEGRO_o1_v01.xml -o $OUTPUT/ALLEGRO_o1_v01.root
./dd4hep2root.py -c $K4GEO/FCCee/ALLEGRO/compact/ALLEGRO_o1_v02/ALLEGRO_o1_v02.xml -o $OUTPUT/ALLEGRO_o1_v02.root
./dd4hep2root.py -c $K4GEO/FCCee/ALLEGRO/compact/ALLEGRO_o1_v03/ALLEGRO_o1_v03.xml -o $OUTPUT/ALLEGRO_o1_v03.root
./dd4hep2root.py -c $K4GEO/FCCee/ALLEGRO/compact/ALLEGRO_o2_v01/ALLEGRO_o2_v01.xml -o $OUTPUT/ALLEGRO_o2_v01.root
```

#### 1.5.2. For CLD

```bash
./dd4hep2root.py -c $K4GEO/FCCee/CLD/compact/CLD_o2_v05/CLD_o2_v05.xml -o $OUTPUT/CLD_o2_v05.root
./dd4hep2root.py -c $K4GEO/FCCee/CLD/compact/CLD_o2_v06/CLD_o2_v06.xml -o $OUTPUT/CLD_o2_v06.root
./dd4hep2root.py -c $K4GEO/FCCee/CLD/compact/CLD_o2_v07/CLD_o2_v07.xml -o $OUTPUT/CLD_o2_v07.root
./dd4hep2root.py -c $K4GEO/FCCee/CLD/compact/CLD_o2_v08/CLD_o2_v08.xml -o $OUTPUT/CLD_o2_v08.root
./dd4hep2root.py -c $K4GEO/FCCee/CLD/compact/CLD_o3_v01/CLD_o3_v01.xml -o $OUTPUT/CLD_o3_v01.root
./dd4hep2root.py -c $K4GEO/FCCee/CLD/compact/CLD_o4_v05/CLD_o4_v05.xml -o $OUTPUT/CLD_o4_v05.root
```

#### 1.5.4. FCChh

```bash
./dd4hep2root.py -c $K4GEO/FCChh/compact/FCChhBaseline/FCChh_DectMaster.xml -o $OUTPUT/FCChh_DectMaster.root
```

#### 1.5.3. For IDEA

```bash
./dd4hep2root.py -c $K4GEO/FCCee/IDEA/compact/IDEA_o1_v01/IDEA_o1_v01.xml -o $OUTPUT/IDEA_o1_v01.root
./dd4hep2root.py -c $K4GEO/FCCee/IDEA/compact/IDEA_o1_v02/IDEA_o1_v02.xml -o $OUTPUT/IDEA_o1_v02.root
./dd4hep2root.py -c $K4GEO/FCCee/IDEA/compact/IDEA_o1_v03/IDEA_o1_v03.xml -o $OUTPUT/IDEA_o1_v03.root
./dd4hep2root.py -c $K4GEO/FCCee/IDEA/compact/IDEA_o1_v04/IDEA_o1_v04.xml -o $OUTPUT/IDEA_o1_v04.root
./dd4hep2root.py -c $K4GEO/FCCee/IDEA/compact/IDEA_o2_v01/IDEA_o2_v01.xml -o $OUTPUT/IDEA_o2_v01.root
```

#### 1.5.4. ILD_FCCee

The ILD_FCCee geometry includes a CAD-based beampipe whose STL files are missing in k4geo.
k4geo downloads them only when built with -DINSTALL_BEAMPIPE_STL_FILES=ON.
To download the STLs:

```bash
D=$K4GEO/FCCee/MDI/compact/stl_files/Pipe_240430
mkdir -p $D && cd $D
for f in AlBeMet162_30042024 Copper_pipe_28092023 Gold_19042024 Paraffine_19042024 Tungsten_mask_02102023 Water_30042024; do
  wget https://fccsw.web.cern.ch/fccsw/filesForSimDigiReco/MDI/stl_files/Pipe_240430/$f.stl
done
```

```bash
./dd4hep2root.py -c $K4GEO/FCCee/ILD_FCCee/compact/ILD_FCCee_v01/ILD_FCCee_v01.xml -o $OUTPUT/ILD_FCCee_v01.root
./dd4hep2root.py -c $K4GEO/FCCee/ILD_FCCee/compact/ILD_FCCee_v02/ILD_FCCee_v02.xml -o $OUTPUT/ILD_FCCee_v02.root
```
