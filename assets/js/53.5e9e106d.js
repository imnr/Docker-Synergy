(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{181:function(t,e,i){"use strict";i.r(e);var a=i(0),l=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"windows-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#windows-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Windows configuration")]),i("p",[t._v("Window-related variables are shown in Table 15. Variables for all Windows nodes (VM and bare metal) are in the file "),i("code",[t._v("group_vars/windows_box.yml")]),t._v(". Windows VM-specific variables are in "),i("code",[t._v("group_vars/vm_wrk_win.yml")]),t._v(" while Windows bare metal variables are in "),i("code",[t._v("group_vars/bm_wrk_win.yml")])]),i("p",[i("strong",[t._v("Table 15.")]),t._v(" Common Windows variables")]),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("win_username")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/windows_box.yml")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Windows user name. The default is "),i("code",[t._v("Administrator")])])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("win_password")]),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("group_vars/all/vault")])]),i("td",{staticStyle:{"text-align":"left"}},[t._v("The password for the Windows account.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("windows_winrm_script")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/windows_box.yml")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Variable used to determine where the "),i("code",[t._v("winrm")]),t._v(" Powershell script will be downloaded from. See the section "),i("code",[t._v("Deploying Windows workers behind a proxy")]),t._v(" for more information.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("windows_update")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/windows_box.yml")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Variable used to determine if Windows updates are automatically downloaded when installing Docker on Windows worker nodes (in the "),i("code",[t._v("playbooks/install_docker.yml")]),t._v("). Defaults to "),i("code",[t._v("true")]),t._v(". See the section "),i("code",[t._v("Deploying Windows workers behind a proxy")]),t._v(" for more information.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("docker_ee_version_windows")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/windows_box.yml")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("It is important that the version of the Docker engine running on your Windows worker nodes is the same as that running on RHEL in the rest of your cluster. You should use this variable to explicitly match up the versions. For Docker 2.1, the recommended value is "),i("code",[t._v("'18.09'")]),t._v(". If you do not explicitly set this value, you may end up with an incompatible newer version running on your Windows workers.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}}),i("td",{staticStyle:{"text-align":"left"}}),i("td",{staticStyle:{"text-align":"left"}})]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("windows_docker_drive")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/windows_box.yml")]),i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("'D'")])])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("windows_docker_directory")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/windows_box.yml")]),i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("'D:\\\\DockerData'")])])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("windows_docker_volume_label")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/windows_box.yml")]),i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("'DockerVol'")])])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("windows_tz")]),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("group_vars/windows_box.yml")])]),i("td",{staticStyle:{"text-align":"left"}},[i("code",[t._v("'Pacific Standard Time'")]),i("br"),t._v("This is different from the "),i("code",[t._v("windows_timezone")]),t._v(" variable. It is important that this value matches the timezone used by UCP servers for certificate validation. See  https://msdn.microsoft.com/en-us/library/ms912391.aspx.")])])])]),i("p",[i("strong",[t._v("Table.")]),t._v(" Windows VM variables")]),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("win_vm_template")]),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("group_vars/vm_wrk_win.yml")])]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Name of the Windows 2016 VM Template to use. Note that this is the name from a vCenter perspective, not the hostname.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("windows_vdvs_ps")]),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("group_vars/vm_wrk_win.yml")])]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Variable used to download the PowerShell script that is used to install vDVS for Windows. For example, "),i("code",[t._v("https://raw.githubusercontent.com/vmware/vsphere-storage-for-docker/master/install-vdvs.ps1")])])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("windows_vdvs_path")]),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("group_vars/vm_wrk_win.yml")])]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Variable used to download vSphere Docker Volume Service software. This variable is combined with "),i("code",[t._v("windows_vdvs_version")]),t._v(" (below) to generate a URL of the form "),i("code",[t._v("<windows_vdvs_path>_<windows_vdvs_version>.zip")]),t._v(" to download the software. For example, to download version 0.21, set "),i("code",[t._v("windows_vdvs_path")]),t._v(" equal to "),i("code",[t._v("https://vmware.bintray.com/vDVS/vsphere-storage-for-docker_windows")]),t._v(" and "),i("code",[t._v("windows_vdvs_version")]),t._v(" equal to "),i("code",[t._v("0.21")])])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("windows_vdvs_version")]),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("group_vars/vm_wrk_win.yml")])]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Combined with "),i("code",[t._v("windows_vdvs_path")]),t._v(", this variable is used to generate the URL for downloading the software.")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("windows_vdvs_directory")]),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("group_vars/vm_wrk_win.yml")])]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Variable used to determine where vDVS software will be unzipped and installed from. The default is "),i("code",[t._v("C:\\Users\\Administrator\\Downloads")])])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("windows_timezone")]),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("group_vars/vm_wrk_win.yml")])]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),i("code",[t._v("15")]),t._v(". Valid values are available at https://msdn.microsoft.com/en-us/library/ms912391.aspx")])])])]),i("h2",{attrs:{id:"advanced-windows-variables"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#advanced-windows-variables","aria-hidden":"true"}},[t._v("#")]),t._v(" Advanced Windows variables")]),i("p",[t._v("In general, it should not be necessary to modify the following advanced variables, but they are documented in Table 16 for the sake of completeness.")]),i("p",[i("strong",[t._v("Table 16.")]),t._v(" Advanced Windows variables")]),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("ansible_user")]),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("group_vars/windows_box.yml")])]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to the Windows user account "),i("code",[t._v("win_username")])])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("ansible_password")]),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("group_vars/windows_box.yml")])]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to the Windows user password "),i("code",[t._v("win_password")]),t._v(" as specified in "),i("code",[t._v("group_vars/all/vault")])])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("ansible_port")]),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("group_vars/windows_box.yml")])]),i("td",{staticStyle:{"text-align":"left"}},[t._v("5986")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("ansible_connection")]),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("group_vars/windows_box.yml")])]),i("td",{staticStyle:{"text-align":"left"}},[t._v("winrm")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("ansible_winrm_server_cert_validation")]),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("group_vars/windows_box.yml")])]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),i("code",[t._v("ignore")])])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("ansible_winrm_operation_timeout_sec")]),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("group_vars/windows_box.yml")])]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),i("code",[t._v("250")])])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("ansible_winrm_read_timeout_sec")]),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("group_vars/windows_box.yml")])]),i("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),i("code",[t._v("300")])])])])])])}],!1,null,null,null);e.default=l.exports}}]);