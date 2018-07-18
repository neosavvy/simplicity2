export const data = [
  {
    "Date": "7/11/16",
    "Time": "8:30 AM",
    "Application": "RecTrac",
    "Hours Down?": "Planned",
    "Notified Who": "RecTrac Users",
    "Severity?": 1.2,
    "Comments": "Migrating RecTrac version 10.3 to version 3.1 will provide enhanced features and better functionality.  This migration will also take the software off individual computers and allow it to be run as a web-based system for much easier maintenance and support in addition to the convenience of running the software from anywhere an internet connection is available.  The vendor who supports this software, VSI, will be onsite to assist.  RecTrac will be unavailable all day on Monday, July 11th.  If the migration is completed on Monday, Park’s staff will start using the new 3.1 version on Tuesday. *** On Tuesday, July 12, Christen notified RecTrac users the following:  Nick and Ryan are here from Vermont Systems working on the RecTrac upgrade this week.  The main database has been migrated, and the Nature Center will be wrapped up this morning.  They will be going around from site to site working with your main staff to make sure the new software is operational, and that you can do your daily tasks.  They will be headed to the Nature Center, Aston and the Pools today, and if there is time they will visit Centers and offices.  We will give you a call beforehand, but please try to be as flexible as you can.  Please wait to use RecTrac until they visit your site.  If this is a problem please contact the Help Desk.",
    "Month": "Jul"
  },
  {
    "Date": "7/13/16",
    "Time": "11:00 AM",
    "Application": "Radios",
    "Hours Down?": "Planned",
    "Notified Who": "Police Command Staff; AFD Chiefs; Cathey Trimnal; Ken Putnam; Greg Shuler; Jeremy Edmonds; Jerry Yates; Eric Boyce, UNCA; Lori Anderson, NC Dept. of Public Safety; Bryan Dillingham, BCIT; Al Bottego, ABC Law Enforcement; John Sanchez; Rosann Christian; Stephanie Bierce; ITSM; Steve Frey; Steve Robison",
    "Severity?": 3.1,
    "Comments": "Work to repair equipment damaged by lightening strike on Royal Pines Tower is scheduled to begin Wednesday, July 13th at 11:00 a.m.  Services should be restored to full capacity by 4:00 p.m.  This will affect all City radios subscribers, including partner agencies.  The tower will operate at reduced strength while replacement equipment is being put into position.  At 11 a.m., technicians will deactivate the tower site to begin switching over to new equipment. Royal Pines provides radio coverage in the southern region of the City and is one of three radio repeater stations. Towers serving central and northern areas of the City will continue to provide radio service during the repairs. The scheduled repairs will take up to 5 hours, but every effort will be made to restore service sooner if possible.",
    "Month": "Jul"
  },
  {
    "Date": "7/14/16",
    "Time": "6:00 PM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees",
    "Severity?": 1.1,
    "Comments": "We will be replacing the server housing the Images (P drive) and GIS-DATA (M drive).  It will be unavailable for about one hour.  All other network services and functions will be unaffected during this transition.  The new server should be faster and will increase storage capacity. *** New COA-BACKUP server (192.168.0.9) was in place July 14, and the old server was still online but under the name OLD-COABACKUP (192.168.0.79).  Gilbert ran a job to make the last copies of current files from the old server to the new server.  He also linked the tape drive to the new server and ran the inventory.",
    "Month": "Jul"
  },
  {
    "Date": "7/15/16",
    "Time": "12:00 PM",
    "Application": "Radios",
    "Hours Down?": "Planned",
    "Notified Who": "Police Command Staff; AFD Chiefs; Cathey Trimnal; Ken Putnam; Greg Shuler; Jeremy Edmonds; Jerry Yates; Eric Boyce, UNCA; Lori Anderson, NC Dept. of Public Safety; Bryan Dillingham, BCIT; Al Bottego, ABC Law Enforcement; John Sanchez; Rosann Christian; Stephanie Bierce; ITSM; Steve Frey; Steve Robison",
    "Severity?": 3.1,
    "Comments": "Technicians will temporarily deactivate talk channels in the White Fawn site to switch over to new antennas. This maintenance will not change service to customers, and all radio subscriber units will continue to operate normally after work is complete. This work is part of the radio system conversion to P-25 which is scheduled for completion later this year.  White Fawn is one of three radio repeater stations. It provides primary radio coverage in the central region of the City. Towers serving northern and southern areas of the City will continue to provide radio service during the outage, but coverage in the central region may be impaired during the maintenance window on Friday. The scheduled outage will take up to four hours, but every effort will be made to restore service sooner if possible.  Work is scheduled to begin Friday, July 15th at 12:00 pm, and services should be restored to full capacity by 4:00 p.m.",
    "Month": "Jul"
  },
  {
    "Date": "7/19/16",
    "Time": "10:15 AM",
    "Application": "Email",
    "Hours Down?": 1,
    "Notified Who": "All City Employees",
    "Severity?": 1.1,
    "Comments": "The Exchange server was reported as being inaccessible.  Gilbert immediately checked the server and could not get to it.  He checked COA-HYPERV-3; it was offline but still running.  He notified Tim and Steve.  It appears COA-HYPERV-3 lost its network connections and proceeded to shut down its clustered virtual machines.  The running virtual machines began starting up on COA-HYPERV-1 as part of the disaster recovery process.  While this was going on, they restarted COA-HYPERV-3 around 10:45 a.m. and checked all connectivity which was fine.  During the restart all four Maximo servers and HR Track plus Exchange and the old FPserver had finished restarting on COA-HYPERV-1.  The only one left was COA-CASHUB.  They proceeded to shut down and migrate all the VMs back to COA-HYPERV-3.   By 11:05 email was back up and the rest of the VMs were up about 15 minutes later.  It took a little longer because Gilbert was letting Tim and Steve do the recovery as he explained the process for cross-training purposes.",
    "Month": "Jul"
  },
  {
    "Date": "7/20/16",
    "Time": "10:00 AM",
    "Application": "Radios",
    "Hours Down?": "Planned",
    "Notified Who": "Police Command Staff; AFD Chiefs; Cathey Trimnal; Ken Putnam; Greg Shuler; Jeremy Edmonds; Jerry Yates; Eric Boyce, UNCA; Lori Anderson, NC Dept. of Public Safety; Bryan Dillingham, BCIT; Al Bottego, ABC Law Enforcement; John Sanchez; Rosann Christian; Stephanie Bierce; ITSM; Steve Frey; Steve Robison",
    "Severity?": 3.1,
    "Comments": "Technicians will temporarily deactivate talk channels in the Peach Knob site to switch over to new antennas. This maintenance will not change service to customers, and all radio subscriber units will continue to operate normally after work is complete. This work is part of the radio system upgrade to P-25 which is scheduled for completion later this year.  Peach Knob is one of three radio repeater stations. It provides primary radio coverage in the northern region of the City. Towers serving central and southern areas of the City will continue to provide radio service during the outage, but coverage in the northern region may be impaired during the maintenance window on Wednesday. The scheduled outage will take up to six hours, but every effort will be made to restore service sooner if possible.  Work is scheduled to begin Wednesday, July 20th at 10:00 a.m., and services should be restored to full capacity by 4:00 p.m.",
    "Month": "Jul"
  },
  {
    "Date": "7/24/16",
    "Time": "10:00 PM",
    "Application": "MapAsheville",
    "Hours Down?": 16,
    "Notified Who": "BPT Team",
    "Severity?": 3.2,
    "Comments": "MapAsheville was not available.  It was caused by a corrupt data set within the GIS data warehouse that we tried to remove manually.  We restored the database and plan to use other tools designed to remove the corrupt tables.  We will likely do this next week.",
    "Month": "Jul"
  },
  {
    "Date": "7/29/16",
    "Time": "8:00 AM",
    "Application": "MapAsheville",
    "Hours Down?": 3.5,
    "Notified Who": "Help Desk; Cameron Carlyle",
    "Severity?": 1.2,
    "Comments": "The GIS Warehouse database went down, affecting access to public-facing applications mapAsheville and Open Data Portal.  Internally, no GIS users could access the GIS Warehouse.",
    "Month": "Jul"
  },
  {
    "Date": "7/29/16",
    "Time": "6:00 PM",
    "Application": "Internet",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees",
    "Severity?": 3.1,
    "Comments": "We are replacing the internet access firewall for city employees.  Staff internet access and guest internet access will be intermittent for approximately one hour.  ScreenConnect access will also be down during this time.  There will be no impact to Outlook email, city website access, or any public safety applications.",
    "Month": "Jul"
  },
  {
    "Date": "8/3/16",
    "Time": "10:00 AM",
    "Application": "Radios",
    "Hours Down?": "Planned",
    "Notified Who": "Police Command Staff; AFD Chiefs; Cathey Trimnal; Joy Griffin; Ken Putnam; Greg Shuler; Jeremy Edmonds; Jerry Yates; Eric Boyce, UNCA; Lori Anderson, NC Dept. of Public Safety; Bryan Dillingham, BCIT; Al Bottego, ABC Law Enforcement; John Sanchez; Rosann Christian; Stephanie Bierce",
    "Severity?": 3.1,
    "Comments": "Technicians will temporarily deactivate talk channels at the Royal Pines tower to connect new transmitter equipment.  Towers serving other areas of the City will continue to provide radio service during each outage, but coverage in the region being serviced may be impaired during the 10 a.m. to 12 p.m. maintenance window.  This maintenance will not change service to customers, and all radio subscriber units will continue to operate normally after work is complete.  This work is part of the radio system upgrade to P-25 which is scheduled for completion later this year.",
    "Month": "Aug"
  },
  {
    "Date": "8/3/16",
    "Time": "2:00 PM",
    "Application": "Radios",
    "Hours Down?": "Planned",
    "Notified Who": "Police Command Staff; AFD Chiefs; Cathey Trimnal; Joy Griffin; Ken Putnam; Greg Shuler; Jeremy Edmonds; Jerry Yates; Eric Boyce, UNCA; Lori Anderson, NC Dept. of Public Safety; Bryan Dillingham, BCIT; Al Bottego, ABC Law Enforcement; John Sanchez; Rosann Christian; Stephanie Bierce",
    "Severity?": 3.1,
    "Comments": "Technicians will temporarily deactivate talk channels at the Peach Knob tower to connect new transmitter equipment.  Towers serving other areas of the City will continue to provide radio service during each outage, but coverage in the region being serviced may be impaired during the 2-4 p.m. maintenance window.  This maintenance will not change service to customers, and all radio subscriber units will continue to operate normally after work is complete.  This work is part of the radio system upgrade to P-25 which is scheduled for completion later this year.",
    "Month": "Aug"
  },
  {
    "Date": "8/4/16",
    "Time": "10:00 AM",
    "Application": "Radios",
    "Hours Down?": "Planned",
    "Notified Who": "Police Command Staff; AFD Chiefs; Cathey Trimnal; Joy Griffin; Ken Putnam; Greg Shuler; Jeremy Edmonds; Jerry Yates; Eric Boyce, UNCA; Lori Anderson, NC Dept. of Public Safety; Bryan Dillingham, BCIT; Al Bottego, ABC Law Enforcement; John Sanchez; Rosann Christian; Stephanie Bierce",
    "Severity?": 3.1,
    "Comments": "Technicians will temporarily deactivate talk channels at the Upper White Fawn tower to connect new transmitter equipment.  Towers serving other areas of the City will continue to provide radio service during each outage, but coverage in the region being serviced may be impaired during the 10 a.m. to 12 p.m. maintenance window.  This maintenance will not change service to customers, and all radio subscriber units will continue to operate normally after work is complete.  This work is part of the radio system upgrade to P-25 which is scheduled for completion later this year.",
    "Month": "Aug"
  },
  {
    "Date": "8/12/16",
    "Time": "5:00 PM",
    "Application": "Munis",
    "Hours Down?": "Planned",
    "Notified Who": "Munis Users",
    "Severity?": 1.1,
    "Comments": "Finance is closing the fiscal year Friday evening.  Munis will be unavailable from Friday at 5:00 PM potentially through Saturday morning.",
    "Month": "Aug"
  },
  {
    "Date": "8/12/16",
    "Time": "6:00 PM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "DSC, Fleet, Parks, USCC",
    "Severity?": 1.2,
    "Comments": "Rebooting Hypervisor4 -  following servers will be down from 7-7:30PM:  COA-CITRIX-WI, COA-CVCCTRPOS, COA-DSC… ALL ACCELLA SERVERS, COA-FLEET-VM, COA-FTPSERVER2, COA-INTRANET & INTRANETDEV, COA-RECTRAC, COA-WIN2008R2, COA-WYSE-DM, COA-XENAPP, NetTracker-Ubuntu12, Coa-bc-cjis, Coa-op5.  Services affected are Accela, CtrlPad, RecTrac, and USCC POS. *** Chris reported that client VMs were up at 7:09.  Tom tested and verified Accela was running as expected, RecTrac was back up, connections to VMs through Hyper-V Tools and monitoring were successful and functioning.",
    "Month": "Aug"
  },
  {
    "Date": "8/18/16",
    "Time": "9:00 AM",
    "Application": "Radios",
    "Hours Down?": "Planned",
    "Notified Who": "Police Command Staff; AFD Chiefs; Cathey Trimnal; Joy Griffin; Ken Putnam; Greg Shuler; Jeremy Edmonds; Jerry Yates; Eric Boyce, UNCA; Lori Anderson, NC Dept. of Public Safety; Bryan Dillingham, BCIT; Al Bottego, ABC Law Enforcement; John Sanchez; Rosann Christian; Stephanie Bierce",
    "Severity?": 3.1,
    "Comments": "Technicians have identified a fault at the Royal Pines radio tower serving the southern region of the City.  The problem has reduced the number of simultaneous talk channels down to four from the usual six.  This problem may present as an occasional busy tone for radios during periods of high usage, but the system is functioning normally otherwise.  Technicians will temporarily deactivate the Royal Pines site to repair the fault.  Services should be restored to full capacity by 11:00 am.  Towers serving central and northern areas of the City will continue to provide radio service during the outage, but coverage in the southern region may be impaired during the maintenance window on Thursday.",
    "Month": "Aug"
  },
  {
    "Date": "8/25/16",
    "Time": "6:15 AM",
    "Application": "Accela",
    "Hours Down?": 2.5,
    "Notified Who": "DSC",
    "Severity?": 2.1,
    "Comments": "Biz server service had failed. Worked with Rich at Trupoint to get online.",
    "Month": "Aug"
  },
  {
    "Date": "8/25/16",
    "Time": "4:50 PM",
    "Application": "Email",
    "Hours Down?": 0.25,
    "Notified Who": "Help Desk, Kevin Sisson, Chris O'Connor, Gilbert Domingo",
    "Severity?": 1.1,
    "Comments": "HA servers on COA-HYPERV-3 unexpectedly shut down.  Servers automatically attempted to come up.  Services available at 5:10pm.",
    "Month": "Aug"
  },
  {
    "Date": "8/25/16",
    "Time": "5:30 PM",
    "Application": "Email",
    "Hours Down?": 0.5,
    "Notified Who": "All City Employees via KACE",
    "Severity?": 1.1,
    "Comments": "HA servers on COA-HYPERV-3 failed again at 5:30.  Servers were manually started this time.  Services available at 5:50.  Maximo and HR Track were also impacted.  There may be an issue with High Availability (HA) settings and lack of hardware resources.  HA is not working as designed.  Log files captured for review.",
    "Month": "Aug"
  },
  {
    "Date": "8/26/16",
    "Time": "5:00 AM",
    "Application": "Third Party",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees",
    "Severity?": 3.1,
    "Comments": "We will be upgrading Sophos antivirus tools to increase security and reliability.  Staff internet access and guest internet access will be intermittent for approximately one hour.  We will be upgrading the servers at this time.  There will be no impact to Outlook email, city website access, or any public safety applications. *** Gilbert noted some problems and will request Sophos support to get past the issue.  They reversed the update process.",
    "Month": "Aug"
  },
  {
    "Date": "9/12/16",
    "Time": "9:00 AM",
    "Application": "Maximo",
    "Hours Down?": 0.75,
    "Notified Who": "All Maximo Users",
    "Severity?": 1.2,
    "Comments": "Tony Reed had to reboot the Maximo server.",
    "Month": "Sep"
  },
  {
    "Date": "9/15/16",
    "Time": "8:00 PM",
    "Application": "Munis",
    "Hours Down?": "Planned",
    "Notified Who": "Munis Users",
    "Severity?": 1.1,
    "Comments": "We will be installing patches in Munis from 8 PM until midnight.",
    "Month": "Sep"
  },
  {
    "Date": "9/20/16",
    "Time": "8:00 PM",
    "Application": "Munis",
    "Hours Down?": "Planned",
    "Notified Who": "Munis Users",
    "Severity?": 1.1,
    "Comments": "Performing some emergency maintenance tonight to correct an issue in the Utility Billing module.",
    "Month": "Sep"
  },
  {
    "Date": "9/23/16",
    "Time": "5:30 PM",
    "Application": "Email",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees",
    "Severity?": 1.1,
    "Comments": "In an effort to resolve an issue with Outlook calendars not synchronizing between desktop computers and mobile devices, we are rebooting the Exchange server that stores our Outlook accounts this evening.  We will reboot the server this evening at 5:30 p.m.  It should be back up in 20 minutes.",
    "Month": "Sep"
  },
  {
    "Date": "10/12/16",
    "Time": "11:30 PM",
    "Application": "Accela",
    "Hours Down?": 7.5,
    "Notified Who": "JJ Wilson; Tom Pace",
    "Severity?": 1.2,
    "Comments": "No EJB receiver available\" error",
    "Month": "Oct"
  },
  {
    "Date": "10/28/16",
    "Time": "12:00 PM",
    "Application": "CJIS",
    "Hours Down?": 3.25,
    "Notified Who": "Capt. Byrd, Capt. Gonce, Wade Wood, James Baumstark, Tammy Hooper, Scott Burnette",
    "Severity?": 1.1,
    "Comments": "CAD down due to a hardware problem.",
    "Month": "Oct"
  },
  {
    "Date": "11/1/16",
    "Time": "11:15 AM",
    "Application": "Munis",
    "Hours Down?": 0.75,
    "Notified Who": "Munis Users",
    "Severity?": 2.1,
    "Comments": "Munis was running very slowly and erroring out.  Eric rebooted at 11:45 - Munis was back up by 11:57.",
    "Month": "Nov"
  },
  {
    "Date": "11/4/16",
    "Time": "5:30 PM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees",
    "Severity?": 1.2,
    "Comments": "We are upgrading RAM (system memory) in one of the City’s virtual servers (COA-HyperV-4) to provide improved performance for systems located on this server (Intranet, Accela, CtrlPad, RecTrac, and USCC POS).  We plan to begin shutting the server down at 5:30 p.m. and expect a maintenance window of approximately three hours.",
    "Month": "Nov"
  },
  {
    "Date": "11/9/16",
    "Time": "3:45 AM",
    "Application": "Maximo",
    "Hours Down?": 0.5,
    "Notified Who": "Maximo users",
    "Severity?": 1.2,
    "Comments": "Labor could not be selected in Maximo Actuals; Tony Reed rebooted the server at 3:45 p.m.  He reported that Maximo was back up with the Labor Records listed at 4:17 p.m.",
    "Month": "Nov"
  },
  {
    "Date": "11/16/16",
    "Time": "1:30 PM",
    "Application": "Third Party",
    "Hours Down?": 2.75,
    "Notified Who": "ScreenConnect users; Support, Tech Team, BPT Team",
    "Severity?": 1.2,
    "Comments": "ScreenConnect server stopped responding.  Employees were not able to start a ScreenConnect session and see their computer after successfully logging into the ScreenConnect system.  Engineers with IT Services worked with ScreenConnect technicians to identify and fix the issue.  We discovered that the session database exceeded the recommended size.  Reducing this file allowed the ScreenConnect server to function normally.  However, some of the information that linked authorized employees back to their computers was lost.  Information was manually added back to the ScreenConnect console.",
    "Month": "Nov"
  },
  {
    "Date": "12/1/16",
    "Time": "5:30 PM",
    "Application": "Third Party",
    "Hours Down?": "Planned",
    "Notified Who": "ScreenConnect users; Support, Tech Team, BPT Team",
    "Severity?": 1.2,
    "Comments": "Monthly patching and security updates necessary to maintain security compliance.  Maintenance will upgrade our ScreenConnect system to Version 6.  This version includes numerous bug fixes and performance upgrades.  A new improved screen layout is included.  The maintenance is scheduled for one hour and should be done by 6:30 p.m.",
    "Month": "Dec"
  },
  {
    "Date": "12/6/16",
    "Time": "12:00 AM",
    "Application": "Radios",
    "Hours Down?": 3,
    "Notified Who": "Jeff Reble",
    "Severity?": 1.1,
    "Comments": "Fire station alerting system failed.",
    "Month": "Dec"
  },
  {
    "Date": "12/8/16",
    "Time": "8:00 PM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees; Citizens",
    "Severity?": 1.1,
    "Comments": "Upgrade core router and switch hardware in data center to allow for more detailed analysis of application and network performance.",
    "Month": "Dec"
  },
  {
    "Date": "12/12/16",
    "Time": "4:00 PM",
    "Application": "RecTrac",
    "Hours Down?": "Planned",
    "Notified Who": "RecTrac Users",
    "Severity?": 1.3,
    "Comments": "We will be updating RecTrac from version 3.1.05.15 to 3.1.06.08 to implement software improvements and fix minor issues.  The software will be unavailable for approximately two hours to complete the update on all the servers.",
    "Month": "Dec"
  },
  {
    "Date": "1/9/17",
    "Time": "4:00 PM",
    "Application": "Maximo",
    "Hours Down?": "Planned",
    "Notified Who": "Maximo users",
    "Severity?": 1.2,
    "Comments": "Rebooted Maximo server to resolve issue with Labor Records not loading.  Maximo was back up at 4:17 p.m.",
    "Month": "Jan"
  },
  {
    "Date": "1/10/17",
    "Time": "3:15 AM",
    "Application": "Network",
    "Hours Down?": 0.5,
    "Notified Who": "Help Desk",
    "Severity?": 1.2,
    "Comments": "A pole was hit, causing a brief interruption in power and disrupting network connections in various locations throughout network.",
    "Month": "Jan"
  },
  {
    "Date": "1/17/17",
    "Time": "2:00 PM",
    "Application": "Email",
    "Hours Down?": 0.75,
    "Notified Who": "All City Employees",
    "Severity?": 2.1,
    "Comments": "Incoming mail from outside senders was not being delivered.  Sending mail to outside recipients and internal mail delivery were not affected.  We worked with the vendor to resolve the issue.",
    "Month": "Jan"
  },
  {
    "Date": "2/1/17",
    "Time": "1:00 AM",
    "Application": "Network",
    "Hours Down?": 0.25,
    "Notified Who": "Help Desk",
    "Severity?": 1.1,
    "Comments": "Dan Lemley and Joe Rogers reported \"drive or network connection not available\" message on RMS and CAD on PCs in PID and Records.  Joe Rogers reported RMS was down in Property & Evidence.",
    "Month": "Feb"
  },
  {
    "Date": "2/2/17",
    "Time": "7:00 AM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "All Police; All Fire",
    "Severity?": 1.1,
    "Comments": "Performing emergency replacement of failing UPS in the basement of the Municipal Building.  All users in the Municipal Building will be affected.  CAD, RMS, Firehouse, all other public safety systems run by CJIS, phones and computers will be unavailable from approximately 7 a.m. to 7:15 a.m. (15 minute outage).  Police and Fire substations using CAD, RMS, and Firehouse maybe be effected as well.",
    "Month": "Feb"
  },
  {
    "Date": "2/6/17",
    "Time": "9:00 PM",
    "Application": "Munis",
    "Hours Down?": "Planned",
    "Notified Who": "Munis Users",
    "Severity?": 1.1,
    "Comments": "Munis users were not able to log in; searches were timing out.  Eric rebooted the server.",
    "Month": "Feb"
  },
  {
    "Date": "2/8/17",
    "Time": "5:10 PM",
    "Application": "Email",
    "Hours Down?": 0.75,
    "Notified Who": "I.T. Staff",
    "Severity?": 1.1,
    "Comments": "COA-CASHUB server lost network connectivity.  This affected OWA, Outlook client and mobile client.  5:15 – 5:20 Tim, Kevin H. and Chris were notified.  5:15  Tim and K2 were able to isolate that the issue was specific to the COA-CASHUB server.  All network services were up.  5:30 - Chris checked the Hyper-V environment.  Again isolating the issue to just the COA-CASHUB server.  5:55 – CASHUB rebooted.  Services restored.  Chris determined that it was a network outage due to the the cashub server running out of resources – memory in particular.  Disk was fine.  Memory overload appears to have taken down network connectivity as this is a VM.  A reboot resolved the issue.",
    "Month": "Feb"
  },
  {
    "Date": "2/14/17",
    "Time": "",
    "Application": "Email",
    "Hours Down?": "",
    "Notified Who": "",
    "Severity?": "",
    "Comments": "RightFax down.",
    "Month": "Feb"
  },
  {
    "Date": "2/17/17",
    "Time": "11:37 PM",
    "Application": "Network",
    "Hours Down?": 3.75,
    "Notified Who": "On call",
    "Severity?": 1.2,
    "Comments": "Civic Center POS outage.",
    "Month": "Feb"
  },
  {
    "Date": "2/27/17",
    "Time": "5:10 PM",
    "Application": "Accela",
    "Hours Down?": 1.25,
    "Notified Who": "Help Desk; Tom Pace",
    "Severity?": 2.2,
    "Comments": "Accela down - Diane Meek reported they could not close out the day's transactions.",
    "Month": "Feb"
  },
  {
    "Date": "3/16/17",
    "Time": "9:00 AM",
    "Application": "Maximo",
    "Hours Down?": 1.25,
    "Notified Who": "Maximo users",
    "Severity?": 1.3,
    "Comments": "Issues loading labor records into Maximo - Tony Reed rebooted the server.",
    "Month": "Mar"
  },
  {
    "Date": "3/17/17",
    "Time": "12:00 PM",
    "Application": "RecTrac",
    "Hours Down?": 48,
    "Notified Who": "Help Desk; Stephanie Osbourn",
    "Severity?": 2.2,
    "Comments": "Citizens were getting security warnings when attempting to access WebTrac.  Their password resets were not being accepted.  Staff was getting a URL requested message when taking payments by phone.  The security certificate had expired, and  was renewed by Saturday, 3/18.",
    "Month": "Mar"
  },
  {
    "Date": "3/28/17",
    "Time": "10:30 AM",
    "Application": "Email",
    "Hours Down?": 0.75,
    "Notified Who": "All City Employees",
    "Severity?": 1.1,
    "Comments": "Emails stopped sending and receiving, internally and externally.  The Exchange server ran out of disk space because backup failed.  The tape got physically jammed in the tape library and did not complete. Chris does not know why we were not notified. He took down the Exchange server database store and extended the drive that holds the  Exchange log files. It came back up by 11:15.  Currently working to fix the Exchange backup and its notifications (WO #93665).",
    "Month": "Mar"
  },
  {
    "Date": "3/31/17",
    "Time": "12:00 AM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees",
    "Severity?": 3.2,
    "Comments": "Server security patches, bug fixes and enhancements to be done 12 a.m. to 7 am.  Systems that could be unavailable include but are not limited to:  QuickBooks database - Transportation, Autodesk License Service for Civil 3D 2012-2016, ScreenConnect, AD Self Service – password recovery tool, APD Internal Affairs App, RecTrac / Webtrac. *** Chris successfully completed all planned maintenance:  Windows OS patches for all the guest servers on HyperV-2, including the host; reallocated processors, memory and disk to better load balance limited resources; and cleaned up guests on Hyper-V, removed systems no longer in production.",
    "Month": "Mar"
  },
  {
    "Date": "4/4/17",
    "Time": "3:15 PM",
    "Application": "Maximo",
    "Hours Down?": "Planned",
    "Notified Who": "All Maximo Users",
    "Severity?": 1.3,
    "Comments": "Issues loading labor records into Maximo - Tony Reed rebooted the server.",
    "Month": "Apr"
  },
  {
    "Date": "4/6/17",
    "Time": "12:00 AM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees",
    "Severity?": 3.2,
    "Comments": "Server security patches, bug fixes and enhancements to be done 12 a.m. to 7 a.m.  Systems that could be affected include but are not limited to:  Rightfax, FTP Services (File Transfer), Water Scada Virtual Workstations, Water Customer Service Virtual Workstation, and IT Help Desk.",
    "Month": "Apr"
  },
  {
    "Date": "4/11/17",
    "Time": "9:00 PM",
    "Application": "Munis",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees",
    "Severity?": 3.2,
    "Comments": "Server security patches, bug fixes, and enhancements to be done 9 p.m. to 5 a.m.  Systems that could be affected include but are not limited to:  Munis Live / Test, Munis Dashboard, and Munis ESS – Self Service.",
    "Month": "Apr"
  },
  {
    "Date": "4/20/17",
    "Time": "10:00 PM",
    "Application": "RecTrac",
    "Hours Down?": "Planned",
    "Notified Who": "RecTrac Users",
    "Severity?": 3.2,
    "Comments": "Adding storage space and security patches to the RecTrac server.",
    "Month": "Apr"
  },
  {
    "Date": "4/21/17",
    "Time": "11:15 AM",
    "Application": "Network",
    "Hours Down?": 1,
    "Notified Who": "All City Employees",
    "Severity?": 1.2,
    "Comments": "Network services and phones went down due to a hardware failure in the data center.",
    "Month": "Apr"
  },
  {
    "Date": "4/21/17",
    "Time": "11:15 AM",
    "Application": "Maximo",
    "Hours Down?": 2.5,
    "Notified Who": "Maximo users",
    "Severity?": 1.3,
    "Comments": "Maximo went offline due to a hardware failure in the data center.",
    "Month": "Apr"
  },
  {
    "Date": "4/21/17",
    "Time": "11:15 AM",
    "Application": "GIS",
    "Hours Down?": 4.25,
    "Notified Who": "GIS users",
    "Severity?": 1.3,
    "Comments": "GIS services went offline due to a hardware failure in the data center.",
    "Month": "Apr"
  },
  {
    "Date": "5/1/17",
    "Time": "10:45 AM",
    "Application": "Maximo",
    "Hours Down?": 1,
    "Notified Who": "Maximo users",
    "Severity?": 1.3,
    "Comments": "The Labor records did not update; server reboot required.",
    "Month": "May"
  },
  {
    "Date": "5/1/17",
    "Time": "11:45 AM",
    "Application": "Network",
    "Hours Down?": 0.25,
    "Notified Who": "Help Desk",
    "Severity?": 1.2,
    "Comments": "The UPS failed and went down at Public Works Building due to power surge from storm.  A hard reset brought it back up.  It will be replaced.",
    "Month": "May"
  },
  {
    "Date": "5/4/17",
    "Time": "3:40 PM",
    "Application": "Network",
    "Hours Down?": 0.5,
    "Notified Who": "Help Desk",
    "Severity?": 1.2,
    "Comments": "Another wind storm caused a power surge that affected the UPS at DSD.  Steve and Kevin H. took another UPS over to the Public Works Building and balanced the load.",
    "Month": "May"
  },
  {
    "Date": "6/9/17",
    "Time": "8:00 PM",
    "Application": "Internet",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees, CAPE",
    "Severity?": 1.2,
    "Comments": "Upgrading core route/switch hardware in datacenter to implement a second Internet connection for the City.  Requires working with a vendor to upgrade some hardware infrastructure.  Shutting down the Internet connection at City Hall for approximately one hour to allow for this upgrade.  All public facing applications will be affected, including Outlook Web Access, One Asheville, the main City website, and Accela.  All VPN users who connect to City Hall will be affected, as well as ScreenConnect users.  There should be NO impact to public safety VPN users who are connected to the Municipal Building firewall.",
    "Month": "Jun"
  },
  {
    "Date": "6/13/17",
    "Time": "9:45 AM",
    "Application": "Maximo",
    "Hours Down?": 0.75,
    "Notified Who": "Maximo users",
    "Severity?": 1.2,
    "Comments": "Tony Reed is rebooting the Maximo server to resolve issues with Labor Records.",
    "Month": "Jun"
  },
  {
    "Date": "6/15/17",
    "Time": "8:15 AM",
    "Application": "Radios",
    "Hours Down?": "Planned",
    "Notified Who": "See comments",
    "Severity?": 3.1,
    "Comments": "From: Jeff Reble - Sent: Monday, June 12, 2017 10:09 AM - To: AFD Senior Chiefs; Police Command Staff; Police District Supervisors; Police Executive Staff; Jeremy Edmonds; Norris Going; Johnny Wilson (jw@buncombecounty.org); Barbara Berry; Denise Haney; Greg Shuler; Ken Putnam; Mark Foster; Tammy Hooper; Wade Wood; Lt. Janice Hawkins; Boyd McCaskill; Sgt. Angela Tullis; Joy Griffin; Travis Duyck; James Baumstark; John Sanchez; Jerry Yates; Sam Byrd; LaShawn Abraham; Nancy Lohr; James Castle; Bryan Dillingham; Brian Houze; Eric Boyce; Kara Walker - Cc: IT Support Staff; IT Technical Staff; Steve Robison; Robert Washburn (rwashburn@csiwnc.com) - Subject: Asheville Radio System Maintenance (Thursday - June 15th - 8:15am - 3:00pm) - Notice to City of Asheville Radio Users - What: Planned Maintenance to White Fawn Tower Site (Central District) - When: Thursday, June 15th from 8:15am – 3:00pm - Why: Consolidate Wiring of White Fawn Radio Tower Equipment - Who this will affect:  Low impact to all Radio Subscribers - This Thursday, June 15th, beginning at 8:15am, technicians will perform some required maintenance at the White Fawn Tower Site to re-route wiring for improved long term maintenance of the radio system. This will better organize cabling to improve system reliability. Work is expected to be complete by 3:00pm the same day. - White Fawn Tower serves the central business district. Radio towers in the south, west, and north districts will continue operating throughout the day. Radio service from the White Fawn tower will go offline periodically during the service window. Other towers will pick of the service load, and no special measures should be required of radio users in the field. - While this maintenance work is expected to have minimal impact to radio service, in-building coverage in the central business district may be impaired slightly while White Fawn tower is offline. - Please be sure to share this notification with any affected staff. Questions or concerns about this scheduled maintenance may be directed to Jeff Reble. Any technical issues can be reported to the IT Services Help Desk at x4000 or help@ashevillenc.gov.",
    "Month": "Jun"
  },
  {
    "Date": "6/28/17",
    "Time": "10:00 AM",
    "Application": "VPN",
    "Hours Down?": "Planned",
    "Notified Who": "All Police; All Fire",
    "Severity?": 1.1,
    "Comments": "What:  Planned maintenance to Municipal Building City-County interconnection and Municipal Building VPN 10:00-11:00 AM (all public safety applications outage from 10-10:30, only vehicles on primary VPN for the 10:00-11:00 timeframe) to consolidate public safety infrastructure into new more secure location - high impact to all public safety users.  Moving Cisco infrastructure hardware that supports both the Municipal Building VPN and the firewall connection to Buncombe County from Municipal Building Room 409, in the hallway, to the radio room off Communications 4th floor.  This will be a first phase in establishing redundant connectivity to Buncombe County over newer and faster hardware.  The move of the main City to County firewall is anticipated to take about 30-45 minutes.  This will result in a complete disconnection of all public safety applications, citywide.  The move of the VPN firewall involves some reconfiguration and may take an additional 45 minutes to complete.  This move will cause a VPN disconnection, but vehicles should reconnect to the City Hall backup VPN server and continue to function.  We will contact Communications and APD/AFR command staff before beginning the maintenance window, to ensure no major public safety events are underway.",
    "Month": "Jun"
  },
  {
    "Date": "6/28/17",
    "Time": "11:00 AM",
    "Application": "VPN",
    "Hours Down?": 1,
    "Notified Who": "All Police; All Fire; GIS users",
    "Severity?": 1.1,
    "Comments": "Complications from planned maintenance interefered with City-County connection.",
    "Month": "Jun"
  },
  {
    "Date": "7/5/17",
    "Time": "11:35 AM",
    "Application": "Internet",
    "Hours Down?": 0.5,
    "Notified Who": "All City Employees",
    "Severity?": 1.1,
    "Comments": "External Internet connection went down.  One Asheville was still up and running, but no external sites could be accessed through it.",
    "Month": "Jul"
  },
  {
    "Date": "7/7/17",
    "Time": "12:01 AM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "All Police; All Fire",
    "Severity?": 3.1,
    "Comments": "The fiber service provider for Spirit Communications is performing emergency maintenance on a circuit serving the Municipal Building.  Mobile computers for Fire and Police will intermittently disconnect from the VPN, but should failover to the City Hall VPN when they reconnect.  Maintenance window is 12:01 AM until 6:00 AM.",
    "Month": "Jul"
  },
  {
    "Date": "7/12/17",
    "Time": "2:45 PM",
    "Application": "Maximo",
    "Hours Down?": 0.5,
    "Notified Who": "Maximo users",
    "Severity?": 1.2,
    "Comments": "Tony Reed rebooted the server.",
    "Month": "Jul"
  },
  {
    "Date": "7/27/17",
    "Time": "12:01 AM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "All Police; All Fire",
    "Severity?": 3.1,
    "Comments": "The fiber service provider for Spirit Communications is performing emergency maintenance on a circuit serving the Municipal Building.  Mobile computers for Fire and Police will intermittently disconnect from the VPN, but should failover to the City Hall VPN when they reconnect.  Maintenance window is 12:01 AM until 5:00 AM.",
    "Month": "Jul"
  },
  {
    "Date": "7/26/17",
    "Time": "4:30 PM",
    "Application": "Network",
    "Hours Down?": 16,
    "Notified Who": "Tim Reimers",
    "Severity?": 3.2,
    "Comments": "Change in firewall setting affected delivery of outbound email to external recipients, ScreenConnect, and Cerner.",
    "Month": "Jul"
  },
  {
    "Date": "8/4/17",
    "Time": "10:00 AM",
    "Application": "Third Party",
    "Hours Down?": 70.5,
    "Notified Who": "All City Employees",
    "Severity?": 3.2,
    "Comments": "The guest wireless service started having intermittent connection issues.  Staff worked with the vendor on troubleshooting the problem under Master WO #97315.",
    "Month": "Aug"
  },
  {
    "Date": "8/6/17",
    "Time": "10:00 AM",
    "Application": "Munis",
    "Hours Down?": "Planned",
    "Notified Who": "Munis Users",
    "Severity?": 1.1,
    "Comments": "In preparation for fiscal year end close, we will be patching the Munis software from 10 AM to 2 PM.",
    "Month": "Aug"
  },
  {
    "Date": "8/29/17",
    "Time": "11:30 AM",
    "Application": "Third Party",
    "Hours Down?": 8,
    "Notified Who": "Help Desk",
    "Severity?": 1.2,
    "Comments": "City website, including Civic service, was down.  Info from Granicus Incident Report:  ROOT CAUSE: A fiber optic line between our primary and secondary data centers was cut in the Chicago area. An additional configuration error prevented the designed failover to the backup datacenter.  SERVICE RESTORATION: There was no option to repair the disruption without restoring the physical link between the datacenters. This repair required physical replacement of the circuit between the datacenters. The repair was completed and validated by 23:33 UTC.  FUTURE PREVENTIVE MITIGATION: The configuration error has been corrected to allow proper failover in the future.",
    "Month": "Aug"
  },
  {
    "Date": "9/1/17",
    "Time": "2:00 PM",
    "Application": "Internet",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees",
    "Severity?": 3.1,
    "Comments": "Wiring and configuration changes to Internet, VPN, and ScreenConnect to configure and implement Internet load balancing equipment.  In preparation for Google Gmail, implementing system that will allow for greater resilience in our Internet connections.  Requires working with a manufacturer during their business hours to upgrade some hardware infrastructure.  May be brief interruptions in Internet, VPN, and ScreenConnect service.  All outbound Internet access will be affected intermittently.  This will impact the public safety VPN users as well.  All mobile vehicles will experience brief interruptions of their connection to the City and applications hosted by Buncombe County.",
    "Month": "Sep"
  },
  {
    "Date": "9/7/17",
    "Time": "5:30 PM",
    "Application": "Internet",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees",
    "Severity?": 3.2,
    "Comments": "Phase II of wiring and configuration changes to Internet, VPN, and ScreenConnect.",
    "Month": "Sep"
  },
  {
    "Date": "11/3/17",
    "Time": "12:30 PM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees",
    "Severity?": 1.1,
    "Comments": "General Services alerted us to an electrical service hazard on the 3rd floor of City Hall impacting server room.  To avoid an unplanned outage of all services, electricians will make a  temporary repair at 12:30 p.m.  A permanent fix will be scheduled at a later date.  All network services will be shut down beginning at 12:25 p.m. - all services to be restored by 1:00 p.m. (phones, email, Internet service and other network applications).",
    "Month": "Nov"
  },
  {
    "Date": "11/10/17",
    "Time": "5:30 AM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees",
    "Severity?": 1.1,
    "Comments": "IT Services and General Services need to make an additional repair to the electrical equipment located on the third floor of City Hall - replace breaker.  This work will impact the City's server room.  All network services will be shut down beginning at 5:30 a.m. and back online at 6:30 a.m.  Services affected will include phones, email, Internet service, and other network applications.",
    "Month": "Nov"
  },
  {
    "Date": "11/21/17",
    "Time": "3:20 PM",
    "Application": "Munis",
    "Hours Down?": 0.25,
    "Notified Who": "",
    "Severity?": 1.1,
    "Comments": "Munis was running slowly and inconsistently.  Eric restarted the server.",
    "Month": "Nov"
  },
  {
    "Date": "12/1/17",
    "Time": "12:45 PM",
    "Application": "Munis",
    "Hours Down?": 0.5,
    "Notified Who": "Munis Users",
    "Severity?": 2.1,
    "Comments": "Munis users reported problems with adding notes or looking up information on various modules, including Contracts, Service Requests, Vendor Inquiry, etc.  Munis server rebooted.",
    "Month": "Dec"
  },
  {
    "Date": "12/4/17",
    "Time": "9:30 AM",
    "Application": "Munis",
    "Hours Down?": 4.5,
    "Notified Who": "Munis Users",
    "Severity?": 2.1,
    "Comments": "Munis was running extremely slow.  Chris O'Connor was able to fix performance issues by stopping shadow copy services on App1 & 2 (WO #102555).",
    "Month": "Dec"
  },
  {
    "Date": "12/5/17",
    "Time": "4:00 AM",
    "Application": "CJIS",
    "Hours Down?": "Planned",
    "Notified Who": "",
    "Severity?": 1.1,
    "Comments": "From: DCIN Notifications <dcin@listserv.unc.edu> Date: Mon, Dec 4, 2017 at 12:04 PM Subject: [dcin] Reminder: DCIN Outage - Tuesday, December 5, 2017 To: DCIN Notifications <dcin@listserv.unc.edu> - Due to required maintenance, DCIN will be completely down from 4AM to 7AM on December 5, 2017.  During this timeframe, DCI access via Omnixx, Mobiles, and CAD devices will be unavailable. - After 7AM, NC DMV, NLETS, NCIC and AOC inquiries should be available. - However, DCI access to NC SAFIS, CCH, SOR/SOR Portal, CHP, Boat Registration, and Recovered Vehicles will remain down until 9AM on Tuesday, December 5, 2017.",
    "Month": "Dec"
  },
  {
    "Date": "12/5/17",
    "Time": "3:00 PM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "All PW and DSD employees",
    "Severity?": 3.2,
    "Comments": "WHO:  All Public Works Building 1st Floor Users - WHAT:  Wiring changes on Public Works Building 1st floor - WHEN:  Tuesday, December 5th 2017, from 3 PM until 7 PM - WHY:  Reconfigure and rewire network for higher speed access - The IT Services Department has hired a vendor to do some wiring work in the Development Services area of the Public Works Building. - Preparatory work will begin at 3 PM to prepare for cutover after hours.  This will be done in the hallway just across from the Ricoh copier, and in the 1st floor wiring closet at the back of the Development Services area.  We will make every effort not to disrupt service during this time. - Actual service outages for DSD  staff should begin after 5 PM and continue until 7 PM.",
    "Month": "Dec"
  },
  {
    "Date": "12/5/17",
    "Time": "6:00 PM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees",
    "Severity?": 3.1,
    "Comments": "WHO:  All City Users, Citizens, Public Safety - WHAT:  Wiring and configuration changes to Internet, VPN, and ScreenConnect - WHEN:  Tuesday, December 5th, 2017, from 6 PM until 7 PM - WHY:  Test and configure Internet load balancing equipment - The IT Services Department needs to perform some testing and maintenance on the equipment used for Internet redundancy. - On Tuesday, December 5th, between 6 PM and 7 PM, there may be brief interruptions in Internet, VPN, and ScreenConnect service.  All outbound Internet access will be affected intermittently. - This maintenance WILL impact the public safety VPN users as well.  All mobile vehicles will experience brief interruptions of their connection to the City and applications hosted by Buncombe County. - There will be no impact for 911 Dispatchers at the Erwin PSAP.  IT Services staff will check in with Communications staff to ensure no major public safety incidents are underway at the time of the testing.",
    "Month": "Dec"
  },
  {
    "Date": "12/19/17",
    "Time": "3:00 PM",
    "Application": "GIS",
    "Hours Down?": 334,
    "Notified Who": "Help Desk; Frances Ruiz; Christen McNamara",
    "Severity?": 2.2,
    "Comments": "Most of the Simplicity searches did not work - it would just spin and not return any info.  It was fully functional on 1/2/18 at 12:52 p.m.",
    "Month": "Dec"
  },
  {
    "Date": "1/9/18",
    "Time": "8:30 AM",
    "Application": "Munis",
    "Hours Down?": 4,
    "Notified Who": "Munis Users",
    "Severity?": 3.2,
    "Comments": "Many users were receiving look-up errors due to a maintenance task which failed last night - reindexing for lookup performance.  Eric L. ran it again.  As the damaged indexes were replaced on each table, screens using those tables began to work.",
    "Month": "Jan"
  },
  {
    "Date": "1/19/18",
    "Time": "7:30 PM",
    "Application": "Network",
    "Hours Down?": 19,
    "Notified Who": "On-call staff; Tech team",
    "Severity?": 1.1,
    "Comments": "Internet access started becoming unstable Friday evening around 7:30 p.m.  CID staff called Saturday morning; JJ was contacted by answering service at 10:30 a.m.  JJ contacted Steve Frey; Steve determined that a 48-port switch was down on the second floor.  He replaced it with a 24-port switch, and got everyone back online by 2:30 p.m.  He and JJ went over on Monday, 1/22, with another 24-port switch.  Remaining ports were back online by 9:30 a.m.",
    "Month": "Jan"
  },
  {
    "Date": "1/20/18",
    "Time": "1:00 PM",
    "Application": "Munis",
    "Hours Down?": 10.25,
    "Notified Who": "Munis Users",
    "Severity?": 1.1,
    "Comments": "After installing patches to prepare for printing 2017 W2's and 1099's, several Munis screens began giving errors. *** Any work done between Friday at 11:57 PM and Saturday 11:15 PM was no longer in Live and had to be reentered.  That work was reflected in Munis Test, if users needed to review it for reentry in Live.",
    "Month": "Jan"
  },
  {
    "Date": "1/21/18",
    "Time": "12:45 PM",
    "Application": "Munis",
    "Hours Down?": 3.5,
    "Notified Who": "Help Desk",
    "Severity?": 2.1,
    "Comments": "Many functions which generate a PDF or report are generating errors and failing.  Working with Tyler Support to correct this.  Users should be able to work normally anywhere which doesn't generate a PDF or report.  *** Eric LaRue sent an email to Munis users notifying them that Tyler Support needed to run a fix requiring users to be out of Munis; it could take up to an hour to run and check.  He asked users to log out of Munis before 10:45. *** Eric announced Tyler had Munis back up at 4:15 p.m.",
    "Month": "Jan"
  },
  {
    "Date": "1/24/18",
    "Time": "6:00 PM",
    "Application": "Internet",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees",
    "Severity?": 3.1,
    "Comments": "Tested and configured Internet load balancing equipment.  Possible brief interruptions in Internet, VPN, and ScreenConnect service.  All outbound Internet access would be affected intermittently.  No known impact to any public safety users or City website access; maintenance operation is intended only to affect outbound Internet access from on-premises City workstations.  No impact for 911 Dispatchers at the Erwin PSAP; IT Services staff would check in with Communications staff to ensure no major public safety incidents are underway at the time of the testing.",
    "Month": "Jan"
  },
  {
    "Date": "1/30/18",
    "Time": "10:53 AM",
    "Application": "Network",
    "Hours Down?": 22.5,
    "Notified Who": "Help Desk; Tech Team",
    "Severity?": 1.2,
    "Comments": "Lori Long contacted the Help Desk to report that internet and phones were down as Rec Park office.  Fiber was accidentally cut by MB Haynes, affecting Rec Park office and Mama T's.  Tim Reimers worked on setting up wireless connection via Nature Center with MC Communications and Skyrunner.",
    "Month": "Jan"
  },
  {
    "Date": "1/31/18",
    "Time": "9:00 AM",
    "Application": "CJIS",
    "Hours Down?": "Planned",
    "Notified Who": "Robert Keith, Barry Hendren, Rich Rauschenback, Dan Flinn, Shane Mackey, Chris Budzinski",
    "Severity?": 3.1,
    "Comments": "BCIT resetting ONESolutionMCT.  Being done to further troubleshoot issues as a result of last week’s upgrade. At the same time BCIT will be re-enabling a security feature that also caused issues last week.",
    "Month": "Jan"
  },
  {
    "Date": "2/10/18",
    "Time": "7:04 PM",
    "Application": "Network",
    "Hours Down?": 7,
    "Notified Who": "Chris O'Connor; Tim Reimers",
    "Severity?": 1.1,
    "Comments": "Isaac Gottfried at Buncombe County IT called Chris (on-call) to report a problem with city phones at the Castle.  At that time it was unclear exactly what the problem was.  They spoke twice about the issue.  Chris informed Tim who had also been called by Isaac. *** Due to a fiber cut on Clingman Ave, there were four firestations and police stations offline.  ERC restored services by Sunday, 2/11 at 2:07 AM.  Affected:  Phones and computers at four firestations. (Stations 3, 6, 10, and 11) and half of the Mach Alert firestation alerting system.  Impacts included the Erwin Hills PSAP, but apparently BC's redundancy as well as ours took over seamlessly.  Redundancy worked just fine for MachAlert, as station alerts continued to work over the radio system secondary path.  A 288 strand fiber and a 144 strand fiber were cut.  The unofficial report from the fiber vendor is that  a fork truck extended up into the overhead fibers.  They caught and crushed two large runs of fiber between sections of the fork truck lifts hydraulics, and dragged down the fibers to the ground, ripping and shredding the fibers.",
    "Month": "Feb"
  },
  {
    "Date": "2/20/18",
    "Time": "8:00 AM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees via One Asheville",
    "Severity?": 2.3,
    "Comments": "Moving to new network rack on City Hall 5th Floor.  Tim notified Patti McFarland and Sasha Vrtunski that WiFi guest Internet would still work, but ScreenConnect to City workstations plugged into wall jacks/Cisco phones would not work.  He also advised that it should be quite possible to log into a City laptop with AD credentials and access Google Drive/Gmail, and suggested plugging laptops intended to use Tuesday morning into the network Monday afternoon and logging on to create profile.",
    "Month": "Feb"
  },
  {
    "Date": "3/5/18",
    "Time": "2:45 AM",
    "Application": "Maximo",
    "Hours Down?": 0.5,
    "Notified Who": "Maximo Users",
    "Severity?": 1.2,
    "Comments": "Due to an issue with Labor entry, Tony will need to reboot Maximo.",
    "Month": "Mar"
  },
  {
    "Date": "3/6/18",
    "Time": "10:15 AM",
    "Application": "Munis",
    "Hours Down?": 0.25,
    "Notified Who": "Munis Users",
    "Severity?": 1.1,
    "Comments": "Munis was running slowly - server was restarted at 10:15; utilities were run to deal with remaining issues.",
    "Month": "Mar"
  },
  {
    "Date": "3/9/18",
    "Time": "2:00 PM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "Chris O'Connor",
    "Severity?": 3.3,
    "Comments": "From: Stan Smith <ssmith@ashevillenc.gov> - Date: Wed, Feb 28, 2018 at 1:26 PM - Subject: Muni Generator / ATS Test !!! - To: Tony Rathbone, Kirk Lingafelter, Bryon Silvers, Wade Wood, Chris O'Connor - \nFYI !!! - This is to inform you that on 3.9.18 @ 2PM Facility Maintenance will be performing a generator / ATS test.  ( automatic transfer switch ) - This will not affect all of building but certain areas. The power will be off briefly while ATS transfers between power sources. Test will last approximately 2 hours. - We can set up a meeting to discuss if anyone wants to. *** On Wed, Feb 28, 2018 at 4:23 PM, Kevin Hymel wrote:  This will impact desktop computers and Cisco phones. *** From: Wanda Burgess - Date: Fri, Mar 2, 2018 at 9:45 AM - Subject: Re: Muni Generator / ATS Test !!! - To: Kevin Hymel Cc: Chris O'Connor, Tim Reimers, Steven Frey - FYI - I called Wade yesterday to make sure he knew that this would impact all computers and phones and he seemed ok with it.  -W",
    "Month": "Mar"
  },
  {
    "Date": "3/13/18",
    "Time": "9:00 AM",
    "Application": "Maximo",
    "Hours Down?": 0.25,
    "Notified Who": "Maximo Users",
    "Severity?": 1.2,
    "Comments": "Rebooting Maximo server.",
    "Month": "Mar"
  },
  {
    "Date": "3/20/18",
    "Time": "11:30 AM",
    "Application": "Accela",
    "Hours Down?": 5.25,
    "Notified Who": "Help Desk; Tom Pace; Erik Botta",
    "Severity?": 2.2,
    "Comments": "Users were unable to attach documents in Accela.  The Y: drive went offline.  We troubleshot the AWS Storage Gateway.  The Barracuda did not have an exemption and now it does.",
    "Month": "Mar"
  },
  {
    "Date": "3/21/18",
    "Time": "7:00 AM",
    "Application": "RecTrac",
    "Hours Down?": "Planned",
    "Notified Who": "RecTrac Users",
    "Severity?": 1.2,
    "Comments": "RecTrac maintenance scheduled to provide the latest version of RecTrac to users, apply security patches and certificates, and increase processors on the server for better performance.  RecTrac will be down starting at 7 AM on Wednesday.  All RecTrac users please log out of and close RecTrac at this time.  We plan for RecTrac to be available again at 10 AM on Wednesday morning.",
    "Month": "Mar"
  },
  {
    "Date": "4/3/18",
    "Time": "5:30 PM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "All City Employees",
    "Severity?": 1.2,
    "Comments": "The UPS located on the second floor of the Public Works building needs to be replaced tonight.  Estimated repair window is 5:30 to 6:30 p.m.  Services affected are as follows:  Accela, Water Customer Service, Help Desk, Munis Test Environment, One Asheville links to documents and other files, RecTrac, RightFax, SCADA, US Cellular Center Point of Sale system.  Public safety applications and access will NOT be affected. *** All affected applications are back up and running, however we were unsuccessful in replacing the failing UPS.  Another maintenance window will need to be scheduled soon.",
    "Month": "Apr"
  },
  {
    "Date": "4/4/18",
    "Time": "9:30 AM",
    "Application": "Munis",
    "Hours Down?": 107.5,
    "Notified Who": "Help Desk",
    "Severity?": 3.1,
    "Comments": "Users were getting a Tyler Technologies error, \"We are currently experiencing difficulties processing this transaction - please try again or contact administrator,\" when attempting to save their time entries.  Some users were able to get the time saved and submitted after trying again.  Eric L. did an index rebuild, but the problem continued.  He opened a ticket with Tyler; they determined that our ESS/CSS version is out of date.  Eric L. updated the code base Sunday night, 4/8/18 as of 9 p.m.",
    "Month": "Apr"
  },
  {
    "Date": "4/7/18",
    "Time": "10:00 AM",
    "Application": "RecTrac",
    "Hours Down?": 4.75,
    "Notified Who": "Craig Fedkenheuer (on call); Jonathan Feldman; Wanda Burgess; Tim Reimers; Chris O'Connor; Kevin Hymel",
    "Severity?": 1.3,
    "Comments": "Nature Center staff not able to load RecTrac on any of their computers - the page wouldn't load the login screen. ***  Tim restarted coa-rectrac and then did an \"iisreset\" on coa-website1 to get it to reconnect the WebTrac IIS instance to RecTrac.",
    "Month": "Apr"
  },
  {
    "Date": "4/10/18",
    "Time": "12:00 PM",
    "Application": "mapAsheville",
    "Hours Down?": 24,
    "Notified Who": "Wanda Burgess",
    "Severity?": 1.2,
    "Comments": "SimpliCity search worked, so it appeared to be fine on cursory checking, but whenever you actually clicked a search result there was an error.",
    "Month": "Apr"
  },
  {
    "Date": "4/11/18",
    "Time": "6:00 PM",
    "Application": "Network",
    "Hours Down?": "Planned",
    "Notified Who": "All",
    "Severity?": 1.2,
    "Comments": "Maintenance rescheduled from April 3 to April 10, 5:30 to 8:30.  Mother board in unit to be installed April 3 was damaged.  New unit ordered.  ***  Start time changed to 6:00 pm, as cut-off time for Accela online inspections scheduling is 6:00 pm. *** In order to impact customers the least amount of time possible, combining two maintenance windows into one, to repair failing equipment and improve performance of Munis Test environment.  Maintenance window changed to 4/11/18 from 6:00 p.m. to 9:00 p.m.",
    "Month": "Apr"
  },
  {
    "Date": "4/12/18",
    "Time": "10:15 AM",
    "Application": "RecTrac",
    "Hours Down?": 24,
    "Notified Who": "Help Desk; Stephanie Osbourn; Kevin Sisson; Chris O'Connor",
    "Severity?": 2.2,
    "Comments": "POS 2 was not processing credit card payments normally - it kept prompting for a billing address.  Removed and reinstalled MSR Wedge profile to resolve problem.  VIC may have been a factor.",
    "Month": "Apr"
  },
  {
    "Date": "4/17/18",
    "Time": "10:55 AM",
    "Application": "RecTrac",
    "Hours Down?": 2,
    "Notified Who": "Help Desk; Stephanie Osbourn",
    "Severity?": 2.2,
    "Comments": "Problem with POS 2 occurred again.  Added workstation name to end of the RecTrac URL. VIC could not find the workstation name so the software could not access the MSR wedge profile.",
    "Month": "Apr"
  },
  {
    "Date": "4/18/18",
    "Time": "6:45 AM",
    "Application": "CJIS",
    "Hours Down?": 2.25,
    "Notified Who": "IT Support Staff",
    "Severity?": 3.1,
    "Comments": "BCIT was working on an issue affecting the ability to use Public Safety applications, including Freedom.",
    "Month": "Apr"
  },
  {
    "Date": "4/19/18",
    "Time": "6:30 AM",
    "Application": "RecTrac",
    "Hours Down?": "Planned",
    "Notified Who": "RecTrac Users",
    "Severity?": 1.2,
    "Comments": "The IT Services department is going to update RecTrac from version 3.1.07 to 3.1.08 on Thursday morning from 6:30 until 8:30.  This update will provide additional RecTrac functionality and a new version of VIC.  The Open Edge Explorer database will also be updated. *** The RecTrac database was updated on 4/19.  We postponed the second half of the upgrade due to time constraints. We did not want the system down, even to complete the upgrade, during business hours.  Another time will be scheduled to update RecTrac to Version 3.1.08.",
    "Month": "Apr"
  },
  {
    "Date": "4/23/18",
    "Time": "8:25 AM",
    "Application": "RecTrac",
    "Hours Down?": 0.25,
    "Notified Who": "Wanda Burgess, Chris O'Connor",
    "Severity?": 1.2,
    "Comments": "RecTrac went down at Nature Center.  Chris O'Connor found the issue related to recent changes and a script that he had running for backups.",
    "Month": "Apr"
  },
  {
    "Date": "4/24/18",
    "Time": "6:30 AM",
    "Application": "RecTrac",
    "Hours Down?": "Planned",
    "Notified Who": "RecTrac Users",
    "Severity?": 1.2,
    "Comments": "The IT Services department rescheduled the update of RecTrac from version 3.1.07 to 3.1.08 for Tuesday morning.  This update will provide additional RecTrac functionality and a new version of VIC.",
    "Month": "Apr"
  },
  {
    "Date": "5/5/18",
    "Time": "11:00 AM",
    "Application": "RecTrac",
    "Hours Down?": 1,
    "Notified Who": "Tim Reimers, Chris O'Connor, Jonathan Feldman, Wanda Burgess",
    "Severity?": 1.2,
    "Comments": "RecTrac went down at the Nature Center.  The Rectrac services needed a restart which only seems to recover fully with a server restart.  Tim and Chris O. spoke about the current status of the application following the upgrades over the past few weeks.  It is not clear why the Nature Center has problems when Parks does not.  They are following up Vermont Systems this week to check on the configuration.",
    "Month": "May"
  },
  {
    "Date": "5/9/18",
    "Time": "11:00 AM",
    "Application": "Munis",
    "Hours Down?": 3,
    "Notified Who": "Help Desk; Munis Users",
    "Severity?": 2.1,
    "Comments": "Users logging into Munis Live were getting fatal error \"Network error: Software caused connection abort.\" *** Restart at noon did not resolve issue.  Support ticket opened with vendor.  Users advised to use Munis Dashboard in the meantime.  *** Workaround announced at 1:58 p.m., users advised to restart computers to load fix.  Dashboard was continuing to ask some users for login info.",
    "Month": "May"
  },
  {
    "Date": "5/10/18",
    "Time": "9:00 AM",
    "Application": "CJIS",
    "Hours Down?": "Planned",
    "Notified Who": "IT Support Staff; IT Technical Staff; APD; AFR",
    "Severity?": 2.1,
    "Comments": "BCIT Public Safety Planned Outage – A prerequisite to upgrading their Superion public safety software systems is an update to our CAD database.  This change will require them to take mobiles (MCT, Freedom, etc.) offline for a window of 30 minutes.  During this 30 minute window CAD will also be intermittently unresponsive.  At approximately 08:45AM dispatchers will receive an additional reminder of the outage.  Please notify staff of this planned outage.  Thanks in advance for your patience and assistance with this needed maintenance.",
    "Month": "May"
  },
  {
    "Date": "5/16/18",
    "Time": "4:30 AM",
    "Application": "CJIS",
    "Hours Down?": "Planned",
    "Notified Who": "IT Support Staff: IT Technical Staff",
    "Severity?": 1.1,
    "Comments": "Public Safety maintenance window is scheduled for 4:30AM until 5:30AM.  BCIT advised to plan for systems to be unavailable for the duration of the maintenance window.  Systems that could be affected include but are not limited to:  CAD, RMS, JMS, MCT, Firehouse, 911 Phone System, 911 Radio System (City & County).  At approximately 4:15 AM, dispatchers and logged in MCT units will receive an additional reminder of the outage.",
    "Month": "May"
  },
  {
    "Date": "5/22/18",
    "Time": "10:00 AM",
    "Application": "RecTrac",
    "Hours Down?": 2.25,
    "Notified Who": "RecTrac Users",
    "Severity?": 2.2,
    "Comments": "There was an issue with credit card processing.  Server was rebooted.",
    "Month": "May"
  },
  {
    "Date": "5/25/18",
    "Time": "1:00 PM",
    "Application": "Accela",
    "Hours Down?": 0.5,
    "Notified Who": "Help Desk; Scott Barnwell; Eric LaRue",
    "Severity?": "",
    "Comments": "Susannah Carver reported Accela was down.  Servers restarted at 1:15 p.m.  System may have gone down due to a user editing their own account.",
    "Month": "May"
  },
  {
    "Date": "6/1/18",
    "Time": "11:30 AM",
    "Application": "Third Party",
    "Hours Down?": 10,
    "Notified Who": "Hep Desk; Tim Reimers",
    "Severity?": 1.3,
    "Comments": "Internet was down at Bee Tree due to AT&T fiber outage.",
    "Month": "Jun"
  },
  {
    "Date": "6/2/18",
    "Time": "4:30 PM",
    "Application": "Network",
    "Hours Down?": 19.75,
    "Notified Who": "Tim Reimers (on call)",
    "Severity?": 3.3,
    "Comments": "Internet and phones were down in some areas of the Public Works building.  One UPS outage affected just some of the switches and access points.",
    "Month": "Jun"
  },
  {
    "Date": "6/6/18",
    "Time": "11:00 AM",
    "Application": "Munis",
    "Hours Down?": 1.75,
    "Notified Who": "Help Desk; Eric LaRue; Manasa Vankamamidi",
    "Severity?": 2.1,
    "Comments": "Munis was locking up, prevent users from attaching, looking up accounts, etc.  Re-indexing did not resolve the issue.  Server was rebooted at 12:10 p.m.  Munis was back online by 12:45 p.m.",
    "Month": "Jun"
  },
  {
    "Date": "6/7/18",
    "Time": "3:40 PM",
    "Application": "CityWorks",
    "Hours Down?": 91.75,
    "Notified Who": "Help Desk; Christen McNamara",
    "Severity?": 2.3,
    "Comments": "Beginning Thursday afternoon some users could not get their windows credentials authorized by the Cityworks Prod and Cityworks Test sites.  By Monday, it grew to 18 users.  The Windows Authentication login page was returning a 400 status (unauthorized) for the files within the WebSite folder.  When reviewing the Security permissions configured against the WebSite folder, it appears that when Tony Reed created a share, permissions for the server users group (COA-CWPROD-APP\\Users) was overwritten or removed and replaced with specific user or users.  After adding the users group back into the WebSite folder, it appears that the site is responding and logging users in appropriately again, (a number of employees that had initially been unable to log in, were able to successfully log in after the change).  As the Test site was also exhibiting the same behavior, Chris O'Connor verified that making the same permissions change there also allowed users to log into the test site.",
    "Month": "Jun"
  },
  {
    "Date": "6/20/18",
    "Time": "4:30 AM",
    "Application": "CJIS",
    "Hours Down?": "Planned",
    "Notified Who": "Support and Tech Teams",
    "Severity?": 1.1,
    "Comments": "The following public safety systems will be unavailable 4:30 AM to 5:30 AM:  CAD, RMS, JMS, MCT, Firehouse, 911 Phone System, and 911 Radio System (City & County).  At approximately 4:15AM on the day of the maintenance window, dispatchers and logged in MCT units will receive an additional reminder of the outage.",
    "Month": "Jun"
  },
  {
    "Date": "6/20/18",
    "Time": "7:40 AM",
    "Application": "Munis",
    "Hours Down?": 5.25,
    "Notified Who": "Munis Users",
    "Severity?": 1.1,
    "Comments": "Munis went down.  Early results appeared to be an issue with the system itself, coa-munis-ma.  Possibly, it was an operating system issue as the system would not boot until Chris O'Connor took extraordinary measures to bring the system online.  No other servers were down.",
    "Month": "Jun"
  },
  {
    "Date": "6/21/18",
    "Time": "12:00 AM",
    "Application": "Third Party",
    "Hours Down?": "Planned",
    "Notified Who": "All Police; All Fire",
    "Severity?": 3.1,
    "Comments": "Spirit Communications is performing maintenance for the permanent repair of damaged fiber in Huntersville, NC.  This work will affect our circuits and impact Internet connection for MDTs.  The MDTs should failover to our Internet Service Provider, ERC.  Users may need to re-login when their devices failover to the other provider.",
    "Month": "Jun"
  },
  {
    "Date": "6/25/18",
    "Time": "7:30 AM",
    "Application": "Third Party",
    "Hours Down?": 3.5,
    "Notified Who": "Tim Reimers",
    "Severity?": 1.3,
    "Comments": "Health Services staff was unable to access Cerner, although they could access other websites.  IT Services was able to access Cerner site.",
    "Month": "Jun"
  },
  {
    "Date": "6/28/18",
    "Time": "12:00 AM",
    "Application": "Internet",
    "Hours Down?": "Planned",
    "Notified Who": "Police Command Staff",
    "Severity?": 1.3,
    "Comments": "Our Internet Service Provider, ERC Broadband, is performing maintenance to upgrade and improve the performance and overall resiliency of their network.  Due to circuits we have in the Federal Building being impacted by the maintenance, Internet access in the Federal Building will be affected.  The maintenance will not affect Internet access for Patrol MDTs or other City public safety facilities.  Although ERC Broadband expects the service outage to last less than 30 minutes, they have reserved the full six-hour window in case they encounter unexpected issues.",
    "Month": "Jun"
  },
  {
    "Date": "7/2/18",
    "Time": "5:00 AM",
    "Application": "RecTrac",
    "Hours Down?": "Planned",
    "Notified Who": "RecTrac Users",
    "Severity?": 1.2,
    "Comments": "Updating RecTrac from 5 AM to 8:30 AM to provide the latest version of RecTrac to users. This update includes a new version of VIC for point of sale processing.",
    "Month": "Jul"
  },
  {
    "Date": "7/9/18",
    "Time": "2:15 PM",
    "Application": "Munis",
    "Hours Down?": 1,
    "Notified Who": "Munis Users",
    "Severity?": 2.2,
    "Comments": "Munis was locking up, prevent users from attaching, looking up accounts, etc.  Re-indexing did not resolve the issue.  Server was rebooted at 12:10 p.m.  Munis was back online by 12:45 p.m.",
    "Month": "Jul"
  },
  {
    "Date": "7/11/18",
    "Time": "2:13 PM",
    "Application": "Munis",
    "Hours Down?": 1.5,
    "Notified Who": "Munis Users",
    "Severity?": "",
    "Comments": "Same problem as on July 9.  Munis restarted at 3:15 PM.",
    "Month": "Jul"
  }
]