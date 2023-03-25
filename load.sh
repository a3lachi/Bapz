
rrr() { git add . ; git commit -m "code update"$1 ; git push ;}

i="23"

while [ $i -lt 40 ]
do
rrr $i;
sleep 120;
i=$[$i+1]
done