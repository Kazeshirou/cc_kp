function [source_matrix] = make_zeros(source_matrix, mark_row, mark_column)
    n = length(source_matrix);
    h = max(max(source_matrix));
    for i = 1:n
        if mark_row(i) == 1
            continue;
        end
        for j = 1:n
            if mark_column(j) == 1
                continue;
            end
            if source_matrix(i, j) < h
                h = source_matrix(i, j);
            end
        end
    end
    
    for j = 1:n
        if mark_column(j) == 0
            source_matrix(:, j) = source_matrix(:, j) - h; 
        end
    end
    
    for i = 1:n
        if mark_row(i) == 1
            source_matrix(i, :) = source_matrix(i, :) + h; 
        end
    end
    
end

function [iter, l_chain] = print_siz(debug, iter, source_matrix, marks, l_chain)
    if debug
        n = length(source_matrix);
        l_chain = print_l_chain(l_chain);
        for i = 1:n
            for j = 1:n
                fprintf("%d", source_matrix(i,j));
                if marks(i, j) == 1
                    fprintf("*");
                elseif marks(i, j) == -1
                    fprintf("'");    
                end
                fprintf("\t");
            end
            fprintf("\n");
        end
        fprintf("\n");
    end
    iter = iter + 1;
end

function [] = print_matrix(matrix)
    n = length(matrix);
    for i = 1:n
        for j = 1:n
            fprintf("%d\t", matrix(i,j));
        end
        fprintf("\n");
    end
end

function [] = print_matrix_mark(matrix, mark_row, mark_column, marks)
    n = length(matrix);
    for i = 1:n
        for j = 1:n
            fprintf("%d", matrix(i,j));
            if marks(i, j) == 1
                fprintf("*\t");
            elseif marks(i, j) == -1
                fprintf("'\t");
            else
                fprintf("\t");
            end
        end
        if mark_row(i)
            fprintf("+");
        else 
            fprintf("-");
        end
        fprintf("\n");
    end
    for i = 1:n
        if mark_column(i)
            fprintf("+\t");
        else 
            fprintf("-\t");
        end
    end
    fprintf("\n");
    fprintf("\n");
    
end

function [l_chain] = print_l_chain(l_chain)
    n = length(l_chain);
    
    if n > 2
        fprintf("(%d, %d) ", l_chain(3, 1), l_chain(3, 2));
        if n > 3
            for i = 4:n
                fprintf(" -> (%d, %d) ", l_chain(i, 1), l_chain(i, 2));
            end
        end
        fprintf("\n\n");
        l_chain = zeros(2,2);
    end
end