with recursive hierachy_qry as
(
    
 select id,name,surname,department,title,managerid,manager,salary
    from public.employee  where manager is null
    
  
   
    
 
    union all 
    select e.id,e.name, e.surname, e.department,e.title, e.managerid,e.manager,e.salary
    from public.employee e
    join hierachy_qry h on h.id = e.managerid
   )

 select * from hierachy_qry ;

