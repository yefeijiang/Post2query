function QueryString()
{//����������󲢳�ʼ��
var name,value,i;
var str=location.href;//����������ַ��URL��
var num=str.indexOf("?")
str=str.substr(num+1);//��ȡ��?������Ĳ�����
var arrtmp=str.split("&");//�������������γɲ�������
for(i=0;i < arrtmp.length;i++){
num=arrtmp[i].indexOf("=");
if(num>0){
name=arrtmp[i].substring(0,num);//ȡ�ò�������
value=arrtmp[i].substr(num+1);//ȡ�ò���ֵ
this[name]=value;//����������Բ���ʼ��
}
}
}
var Request=new QueryString();//ʹ��new�����������������ʵ��