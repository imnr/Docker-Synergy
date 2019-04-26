(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{246:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"deploying-the-nfs-provisioner-for-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-the-nfs-provisioner-for-kubernetes","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploying the NFS provisioner for Kubernetes")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("Configure the variables described in the section "),a("code",[e._v("Kubernetes Persistent Volume configuration")])]),e._v(" "),a("li",[e._v("Install the "),a("code",[e._v("kubectl")]),e._v(" binary on your Ansible box")]),e._v(" "),a("li",[e._v("Install the UCP Client bundle for the "),a("code",[e._v("admin")]),e._v(" user")]),e._v(" "),a("li",[e._v("Confirm that you can connect to the cluster by running a test command, for example, "),a("code",[e._v("kubectl get nodes")])])]),e._v(" "),a("h2",{attrs:{id:"using-nfs-vm-for-post-deployment-verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-nfs-vm-for-post-deployment-verification","aria-hidden":"true"}},[e._v("#")]),e._v(" Using NFS VM for post-deployment verification")]),e._v(" "),a("p",[e._v("In this example, it is assumed that the relevant variables are configured as follows:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_namespace")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("nfsstorage")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_role")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("nfs-provisioner-runner")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_serviceaccount")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("nfs-provisioner")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_name")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("hpe.com/nfs")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_storage_class_name")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("nfs")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_server_ip")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("hpe2-nfs.am2.cloudra.local")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_server_share")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("/k8s")])])])])]),e._v(" "),a("p",[e._v("In this instance, the server IP is set to the NFS VM that has been deployed.")]),e._v(" "),a("h2",{attrs:{id:"running-the-playbook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-playbook","aria-hidden":"true"}},[e._v("#")]),e._v(" Running the playbook")]),e._v(" "),a("p",[e._v("Once the prerequisites are satisfied, run the appropriate playbook on your Ansible node:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# cd ~/Docker-Synergy\n# ansible-playbook -i hosts playbooks/nfs-provisioner.yml --vault-password-file .vault_pass\n")])])]),a("p",[e._v("For validation, the playbook creates a test claim and a pod, the pod writes content to a file, the pod is deleted and then\nthe playbook checks that the contents of the file have been persisted.")]),e._v(" "),a("p",[e._v("The output of the playbook shows the various steps taking place:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('        "pod/test-pod created",\n        "/k8s:",\n        "nfsstorage-test-claim-pvc-e6a09191-3b41-11e9-a830-0242ac11000b",\n        "",\n        "/k8s/nfsstorage-test-claim-pvc-e6a09191-3b41-11e9-a830-0242ac11000b:",\n        "bar.txt",\n        "*** delete test-pod ***",\n        "pod \\"test-pod\\" deleted",\n        "*** cat bar.txt ***",\n        "hello",\n        "*** delete test-claim ***",\n        "persistentvolumeclaim \\"test-claim\\" deleted"\n')])])]),a("p",[e._v("Running the command "),a("code",[e._v("kubectl get sc")]),e._v(" will show the storage class named "),a("code",[e._v("nfs")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# kubectl get sc\n\nNAME      PROVISIONER   AGE\nnfs       hpe.com/nfs   5m\n")])])]),a("p",[e._v("The following section  shows how to manually perform a similar valiation test to the one done by the playbook.")]),e._v(" "),a("h2",{attrs:{id:"manually-testing-the-nfs-provisioner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually-testing-the-nfs-provisioner","aria-hidden":"true"}},[e._v("#")]),e._v(" Manually testing the NFS provisioner")]),e._v(" "),a("p",[e._v("Create a temporary file "),a("code",[e._v("/tmp/pvc.yml")]),e._v(" for a persistent volume claim (PVC) named "),a("code",[e._v("dynnfs-testpvc")]),e._v(" with a storage class of "),a("code",[e._v("nfs")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# cat /tmp/pvc.yml <<EOF\n---\nkind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: dynnfs-testpvc\n  annotations:\n    volume.beta.kubernetes.io/storage-class: "nfs"\nspec:\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 100Mi\nEOF  \n\n')])])]),a("p",[e._v("Create the PVC resource by running "),a("code",[e._v("kubectl apply")]),e._v(" on this file.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# kubectl apply -f /tmp/pvc.yml\n\npersistentvolumeclaim "dynnfs-testpvc" created\n')])])]),a("p",[e._v("Verify that the corresponding persistent volume (PV) was created at the same time.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# kubectl get pv\n\nNAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS    CLAIM                    STORAGECLASS   REASON    AGE\npvc-e685a9d2-8a6f-11e8-9025-0242ac110010   100Mi      RWX            Delete           Bound     default/dynnfs-testpvc   nfs                      4s\n")])])]),a("p",[e._v("Define a pod that will mount the persistent volume through using the persistent volume claim. The persistent volume is mounted under "),a("code",[e._v("/tmp/foo")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat /tmp/pod.yml <<EOF\napiVersion: apps/v1beta2\nkind: Deployment\nmetadata:\n  name: dynnfs-testpod\nspec:\n  selector:\n    matchLabels:\n      app: dynnfs-testpod\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: dynnfs-testpod\n    spec:\n      volumes:\n      - name: pod-data\n        persistentVolumeClaim:\n          claimName: dynnfs-testpvc\n      containers:\n      - name: dynnfs-testpod\n        command:\n        - sh\n        - -c\n        - while true; do sleep 1; done\n        image: radial/busyboxplus:curl\n        volumeMounts:\n        - mountPath: /tmp/foo\n          name: pod-data\nEOF\n")])])]),a("p",[e._v("Create the pod resource by running "),a("code",[e._v("kubectl apply")]),e._v(" on the file.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# kubectl apply -f /tmp/pod.yml\n\ndeployment.apps "dynnfs-testpod" created\n')])])]),a("p",[e._v("Retrieve the pod ID and then execute a command in the pod to create a test file on the persistent volume. The file is named "),a("code",[e._v("/tmp/foo/bar.txt")]),e._v(" and contains the string "),a("code",[e._v("hello")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# pod=$(kubectl get pod | awk '/dynnfs-testpod-/ {print $1}')\n# kubectl exec -it $pod -- sh -c \"echo hello >/tmp/foo/bar.txt\"\n")])])]),a("p",[e._v("In this example, where the NFS VM is being used as the storage back-end, you can examine the content of the folder containing the persistent volumes. Given the values specified above, where the NFS VM is named "),a("code",[e._v("hpe2-nfs")]),e._v(" and the "),a("code",[e._v("nfs_provisioner_server_share")]),e._v(" is "),a("code",[e._v("k8s")]),e._v(", you can connect to the VM and explore the folder as follows.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# ssh hpe2-nfs ls -R /k8s\n/k8s:\ndefault-dynnfs-testpvc-pvc-e685a9d2-8a6f-11e8-9025-0242ac110010\n \n/k8s/default-dynnfs-testpvc-pvc-e685a9d2-8a6f-11e8-9025-0242ac110010:\nbar.txt\n")])])]),a("p",[e._v("Examine the contents of the file to ensure that the string "),a("code",[e._v("hello")]),e._v(" has been persisted in the file "),a("code",[e._v("bar.txt")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# ssh hpe2-nfs cat /k8s/default-dynnfs-testpvc-pvc-e685a9d2-8a6f-11e8-9025-0242ac110010/bar.txt\nhello\n")])])])])}],!1,null,null,null);t.default=n.exports}}]);