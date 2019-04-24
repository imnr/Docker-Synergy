(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{308:function(t,e,a){"use strict";a.r(e);var i=a(0),l=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"windows-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Windows configuration")]),t._v(" "),a("p",[t._v("Window-related variables are shown in Table 15. Variables for all Windows nodes (VM and bare metal) are in the file "),a("code",[t._v("group_vars/windows_box.yml")]),t._v(". Windows VM-specific variables are in "),a("code",[t._v("group_vars/vm_wrk_win.yml")]),t._v(" while Windows bare metal variables are in "),a("code",[t._v("group_vars/bm_wrk_win.yml")])]),t._v(" "),a("p",[a("strong",[t._v("Table 15.")]),t._v(" Common Windows variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("win_username")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/windows_box.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Windows user name. The default is "),a("code",[t._v("Administrator")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("win_password")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The password for the Windows account.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("windows_update")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/windows_box.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Variable used to determine if Windows updates are automatically downloaded when installing Docker on Windows worker nodes (in the "),a("code",[t._v("playbooks/install_docker.yml")]),t._v("). Defaults to "),a("code",[t._v("true")]),t._v(".")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("docker_ee_version_windows")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/windows_box.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("It is important that the version of the Docker engine running on your Windows worker nodes is the same as that running on RHEL in the rest of your cluster. You should use this variable to explicitly match up the versions. For Docker 2.1, the recommended value is "),a("code",[t._v("'18.09'")]),t._v(". If you do not explicitly set this value, you may end up with an incompatible newer version running on your Windows workers.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("windows_docker_drive")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/windows_box.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'D'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("windows_docker_directory")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/windows_box.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'D:\\\\DockerData'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("windows_docker_volume_label")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/windows_box.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'DockerVol'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("windows_tz")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/windows_box.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("'Pacific Standard Time'")]),a("br"),t._v("This is different from the "),a("code",[t._v("windows_timezone")]),t._v(" variable. It is important that this value matches the timezone used by UCP servers for certificate validation. See  https://msdn.microsoft.com/en-us/library/ms912391.aspx.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("windows_winrm_script")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/windows_box.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Variable used to determine where the "),a("code",[t._v("winrm")]),t._v(" Powershell script will be downloaded from. This script needs to be made available locally as described in the following section.")])])])]),t._v(" "),a("h2",{attrs:{id:"configure-remoting-for-ansible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-remoting-for-ansible","aria-hidden":"true"}},[t._v("#")]),t._v(" Configure remoting for Ansible")]),t._v(" "),a("p",[t._v("The playbooks for deploying Windows workers rely on a Powershell script for remote access from the Ansible machine. The script "),a("code",[t._v("ConfigureRemotingForAnsible.ps1")]),t._v(" is available online on GitHub\nat https://raw.githubusercontent.com/ansible/ansible/devel/examples/scripts/ConfigureRemotingForAnsible.ps1.")]),t._v(" "),a("p",[t._v("You need to make this script available locally:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Download the script:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("wget https://raw.githubusercontent.com/ansible/ansible/devel/examples/scripts/ConfigureRemotingForAnsible.ps1\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Deploy a local HTTP server, enabling port 80, for example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yum install httpd\nsystemctl enable httpd\nsystemctl start httpd\nfirewall-cmd --permanent --add-port 80/tcp --zone=public\nfirewall-cmd --reload\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Copy the downloaded script to the web server:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cp ConfigureRemotingForAnsible.ps1 /var/www/html\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Configure the variable to point at the local web server, for example,")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("windows_winrm_script: 'http://10.10.174.230/ConfigureRemotingForAnsible.ps1'\n")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Table.")]),t._v(" Windows VM variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("win_vm_template")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/vm_wrk_win.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Name of the Windows 2016 VM Template to use. Note that this is the name from a vCenter perspective, not the hostname.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("windows_vdvs_ps")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/vm_wrk_win.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Variable used to download the PowerShell script that is used to install vDVS for Windows. For example, "),a("code",[t._v("https://raw.githubusercontent.com/vmware/vsphere-storage-for-docker/master/install-vdvs.ps1")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("windows_vdvs_path")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/vm_wrk_win.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Variable used to download vSphere Docker Volume Service software. This variable is combined with "),a("code",[t._v("windows_vdvs_version")]),t._v(" (below) to generate a URL of the form "),a("code",[t._v("<windows_vdvs_path>_<windows_vdvs_version>.zip")]),t._v(" to download the software. For example, to download version 0.21, set "),a("code",[t._v("windows_vdvs_path")]),t._v(" equal to "),a("code",[t._v("https://vmware.bintray.com/vDVS/vsphere-storage-for-docker_windows")]),t._v(" and "),a("code",[t._v("windows_vdvs_version")]),t._v(" equal to "),a("code",[t._v("0.21")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("windows_vdvs_version")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/vm_wrk_win.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Combined with "),a("code",[t._v("windows_vdvs_path")]),t._v(", this variable is used to generate the URL for downloading the software.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("windows_vdvs_directory")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/vm_wrk_win.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Variable used to determine where vDVS software will be unzipped and installed from. The default is "),a("code",[t._v("C:\\Users\\Administrator\\Downloads")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("windows_timezone")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/vm_wrk_win.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("15")]),t._v(". Valid values are available at https://msdn.microsoft.com/en-us/library/ms912391.aspx")])])])]),t._v(" "),a("h2",{attrs:{id:"advanced-windows-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-windows-variables","aria-hidden":"true"}},[t._v("#")]),t._v(" Advanced Windows variables")]),t._v(" "),a("p",[t._v("In general, it should not be necessary to modify the following advanced variables, but they are documented in Table 16 for the sake of completeness.")]),t._v(" "),a("p",[a("strong",[t._v("Table 16.")]),t._v(" Advanced Windows variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ansible_user")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/windows_box.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to the Windows user account "),a("code",[t._v("win_username")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ansible_password")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/windows_box.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to the Windows user password "),a("code",[t._v("win_password")]),t._v(" as specified in "),a("code",[t._v("group_vars/all/vault")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ansible_port")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/windows_box.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("5986")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ansible_connection")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/windows_box.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("winrm")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ansible_winrm_server_cert_validation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/windows_box.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("ignore")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ansible_winrm_operation_timeout_sec")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/windows_box.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("250")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ansible_winrm_read_timeout_sec")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/windows_box.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("300")])])])])])])}],!1,null,null,null);e.default=l.exports}}]);