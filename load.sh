
rrr() { git add . ; git commit -m "code update"$1 ; git push ;}

i="1999"

while [ $i -lt 2020 ]
do
rrr $i;
sleep 170;
i=$[$i+1]
done