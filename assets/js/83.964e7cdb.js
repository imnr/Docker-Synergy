(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{279:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"create-the-red-hat-linux-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-the-red-hat-linux-template","aria-hidden":"true"}},[e._v("#")]),e._v(" Create the Red Hat Linux template")]),e._v(" "),a("p",[e._v("To create the Red Hat Linux VM template that you will use as the base for all your nodes, you first create a Virtual Machine with the OS installed and then convert the Virtual Machine to a VM Template. The VM Template is created as lean as possible, with any additional software installs and/or system configuration performed subsequently using Ansible.")]),e._v(" "),a("p",[e._v("As the creation of the template is a one-off task, this procedure has not been automated. The steps required to manually create a VM template are outlined below.")]),e._v(" "),a("p",[e._v("Log in to vCenter and create a new Virtual Machine with the following characteristics:")]),e._v(" "),a("ul",[a("li",[e._v("Guest OS Family: Linux, Guest OS Version: Red Hat Enterprise Linux (64-bit)")]),e._v(" "),a("li",[e._v("Hard Disk size: 50GB, (Thin provisioning)")]),e._v(" "),a("li",[e._v("A single network controller connected to the network or VLAN of your choice. All VMs will connect to this same network.")]),e._v(" "),a("li",[e._v("Optionally you can remove the floppy drive")])]),e._v(" "),a("p",[e._v("Install Red Hat Enterprise 7:")]),e._v(" "),a("ol",[a("li",[e._v("Select a language which is supported by Docker")]),e._v(" "),a("li",[e._v("For the software selection, choose "),a("strong",[e._v("Infrastructure Server")]),e._v(" as the base environment and add the "),a("strong",[e._v("Guest Agents")]),e._v(" from the lists of add-ons available for this environment. The Infrastructure Server environment is selected here versus the Minimal Install because customization of Linux guest operating systems requires that Perl is installed in the Linux guest operating system.")]),e._v(" "),a("li",[e._v("Configure the network settings so that you can later access the VM using SSH. Specify an IP address for the network interface, a default gateway, DNS settings and possibly any HTTP/HTTPS proxies that apply in your environment.")]),e._v(" "),a("li",[e._v("Specify a password for the root account and optionally created an admin user.")]),e._v(" "),a("li",[e._v("Wait for the installation to finish and for the VM to reboot.")])]),e._v(" "),a("h2",{attrs:{id:"update-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-packages","aria-hidden":"true"}},[e._v("#")]),e._v(" Update packages")]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("yum update")]),e._v(" to install the latest packages, configuring a proxy if required.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# subscription-manager config --server.proxy_hostname=<proxy IP> --server.proxy_port=<proxy port>\n\n# subscription-manager register  --auto-attach\n\n# subscription-manager repos \\\n--enable=rhel-7-server-rpms \\\n--enable=rhel-7-server-extras-rpms\n\n# yum update\n\n# subscription-manager unregister\n")])])]),a("h2",{attrs:{id:"finalize-the-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finalize-the-template","aria-hidden":"true"}},[e._v("#")]),e._v(" Finalize the template")]),e._v(" "),a("p",[e._v("Log in to the "),a("code",[e._v("root")]),e._v(" account on the Ansible box and copy the SSH public key to the VM Template. This will allow your Ansible node to SSH to all the Virtual Machines created from the VM Template without the need for a password.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ssh-copy-id root@<IP of your VM_Template>\n")])])]),a("p",[e._v("Perform the following steps on the VM Template to finalize its creation:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Clean up the template by running the following commands from the "),a("strong",[e._v("Virtual Machine Console:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n# rm /etc/ssh/ssh_host_*\n# nmcli con del ens192\n# logrotate -f /etc/logrotate.conf\n# rm /var/log/*-201?*\n# history -c\t\t\n\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Shutdown the VM")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# shutdown -h now\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Turn the VM into a template by right-clicking on your VM and selecting "),a("code",[e._v("Template -> Convert to Template")]),e._v(". This will create a new template visible under VM Templates in Folders, ready for future use.")])])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" In both the Ansible node and the VM Template, you might need to configure the network so one node can reach the other. Instructions for this step have been omitted since it is a basic step and could vary depending on the user’s environment.")])])}],!1,null,null,null);t.default=s.exports}}]);