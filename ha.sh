gill() { 
	git add * ; git commit -m 'code update' ; git push --all -f
}

for i in {1..40} :
do
	gill ;
	sleep 120 ;

done
