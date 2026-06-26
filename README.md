# oem-aa-mod Installer

Installer package for [oem-aa-mod](https://github.com/VitaliyKurokhtin/oem-aa-mod) — adds Android Auto support to Mazda CMU (MZD Connect).

Releases are built automatically whenever a new upstream version is published. Download the latest `oem-aa-mod-<version>-installer.zip` from the [Releases](https://github.com/Bijan-A/oem-aa-mod-installer/releases) page.

## Requirements

- USB flash drive **32 GB or smaller**, formatted as **FAT32**

## Installation

1. Extract the zip and copy the **contents** of the `oem-aa-mod-<version>-installer/` folder to the **root directory** of your flash drive.

2. Safely eject the drive and plug it into your Mazda.

3. In the car, navigate to the **Entertainment** menu and select the **USB Drive**.

4. Wait a couple of seconds — the diagnostic menu should launch automatically.

5. In the diagnostic menu, open a terminal and run:

   ```sh
   cd /tmp/mnt/sda1
   ```

   > If nothing happens, try `cd /tmp/mnt/sdb1` instead — this depends on which USB port you used.

6. Run the installer:

   ```sh
   sh run.sh
   ```

7. Follow any on-screen prompts. Once complete, reboot the head unit.

## Credits

- [VitaliyKurokhtin/oem-aa-mod](https://github.com/VitaliyKurokhtin/oem-aa-mod) — the mod itself