function [res] = if_test(l_chain)
    x = -3;
    n = length(l_chain);
    if n > 5
        res = true;
    end

    res = false;
end

x = 1 + 3.5;

function [l_chain] = print_l_chain(l_chain)
    n = length(l_chain);
    
    if n > 2
        fprintf('(%d, %d) ', l_chain(3, 1), l_chain(3, 2));
        if n > 3
            for i = 4:n
                fprintf(" -> (%d, %d) ", l_chain(i, 1), l_chain(i, 2));
            end
        end
        fprintf("\n\n");
        l_chain = zeros(2,2);
    end
end

classdef (Abstract = false) (AllowedSubclasses = {?ClassName1,?ClassName2,?ClassName3}) MyClass < int24 & FLOAT
   properties (Access = private, Constant = true)
      Salary
      Password
   end
   methods
      function obj = MyClass(val)
         if nargin > 0
            obj.Prop = val;
         end
      end
   end
end

switch (rem(n,4)==0) + (rem(n,2)==0)
    case 0
        M = odd_magic(n)    
    case 1      
        M = single_even_magic(n)    
    case 2       
        M = double_even_magic(n)    
    otherwise       
        error('This is impossible') 
    end

if A > B   
    'greater'
elseif A < B   
    'less'
elseif A == B   
    'equal'
else   
    error('Unexpected situation')
end

fid = fopen('magic.m','r');
count = 0;
while ~feof(fid)    
    line = fgetl(fid); 
    if isempty(line) | strncmp(line,'%',1)        
        continue    
    end    
    count = count + 1;
end
disp(sprintf('%d lines',count));